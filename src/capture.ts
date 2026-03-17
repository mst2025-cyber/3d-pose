import { Muxer, ArrayBufferTarget } from 'webm-muxer';

export interface CaptureOptions {
    startTime: number;
    endTime: number;
    fps: number;
}

export interface CaptureCallbacks {
    /** フレーム処理ごとに呼ばれる描画コールバック。videoTimeMs はビデオの現在時刻(ms) */
    onRender: (videoTimeMs: number) => void | Promise<void>;
    /** 進捗コールバック */
    onProgress: (frame: number, total: number) => void;
    /** 完了時に WebM Blob を渡す */
    onComplete: (blob: Blob) => void;
    /** エラー時 */
    onError: (err: Error) => void;
}

/**
 * フレームステップキャプチャ管理クラス。
 * 動画を 1 フレームずつシーク → ポーズ推定 → レンダリング → WebCodecs でエンコード。
 * WebM (VP9) でフレーム精度の高い動画を生成する。
 */
export class FrameCaptureManager {
    private isCapturing = false;
    private shouldStop = false;

    constructor(
        private canvas: HTMLCanvasElement,
        private video: HTMLVideoElement
    ) { }

    public get capturing() { return this.isCapturing; }

    public async startCapture(options: CaptureOptions, callbacks: CaptureCallbacks) {
        if (this.isCapturing) return;
        this.isCapturing = true;
        this.shouldStop = false;

        const { startTime, endTime, fps } = options;
        const frameStep = 1 / fps;
        const totalFrames = Math.ceil((endTime - startTime) * fps);
        const frameUs = Math.round(1_000_000 / fps); // microseconds per frame

        // WebCodecs サポート確認
        if (!('VideoEncoder' in window)) {
            callbacks.onError(new Error('このブラウザは WebCodecs をサポートしていません（Chrome 94+ が必要です）'));
            this.isCapturing = false;
            return;
        }

        // canvas の解像度を偶数に補正（WebCodecs 要件）
        const width = this.canvas.width % 2 === 0 ? this.canvas.width : this.canvas.width - 1;
        const height = this.canvas.height % 2 === 0 ? this.canvas.height : this.canvas.height - 1;

        const muxer = new Muxer({
            target: new ArrayBufferTarget(),
            video: { codec: 'V_VP9', width, height },
            firstTimestampBehavior: 'offset',
        });

        let encodeError: Error | null = null;
        const encoder = new VideoEncoder({
            output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),
            error: (e) => { encodeError = e; },
        });

        encoder.configure({
            codec: 'vp09.00.10.08',
            width,
            height,
            bitrate: 8_000_000,
            framerate: fps,
        });

        console.log(`[Capture] Started: ${totalFrames} frames, ${width}x${height}`);

        try {
            for (let i = 0; i < totalFrames && !this.shouldStop; i++) {
                const targetTime = startTime + i * frameStep;

                // シーク
                if (this.video.duration !== Infinity) {
                    this.video.currentTime = targetTime;
                    await this.waitForSeek();
                }

                // readyState が HAVE_CURRENT_DATA (>=2) になるまで待つ
                await this.waitForReadyState();

                if (encodeError) {
                    console.error("[Capture] Encoder Error during loop:", encodeError);
                    throw encodeError;
                }

                // ポーズ推定 + レンダリング（呼び出し元が実施、Promise を返す場合はawait）
                const virtualTimeMs = Math.round((i * frameUs) / 1000);
                await callbacks.onRender(virtualTimeMs);

                // canvas フレームをキャプチャして VideoFrame に変換 (待ち時間の前に実行)
                const bitmap = await createImageBitmap(this.canvas, 0, 0, width, height);

                // レンダ完了を待つ (setTimeout で代替して非アクティブタブ対応)
                await new Promise(resolve => setTimeout(resolve, 10));

                const vf = new VideoFrame(bitmap, {
                    timestamp: i * frameUs,
                    duration: frameUs,
                });
                encoder.encode(vf, { keyFrame: i % Math.round(fps) === 0 });
                vf.close();
                bitmap.close();

                if (i % 10 === 0) console.log(`[Capture] Progress: ${i + 1}/${totalFrames}`);
                callbacks.onProgress(i + 1, totalFrames);
            }

            await encoder.flush();
            if (encodeError) throw encodeError;

            muxer.finalize();
            const buffer = (muxer.target as ArrayBufferTarget).buffer;
            console.log(`[Capture] Finished: ${buffer.byteLength} bytes`);
            const blob = new Blob([buffer], { type: 'video/webm' });
            callbacks.onComplete(blob);

        } catch (err) {
            callbacks.onError(err as Error);
        } finally {
            try { encoder.close(); } catch (_) { /* already closed */ }
            this.isCapturing = false;
        }
    }

    public stopCapture() {
        this.shouldStop = true;
    }

    /**
     * seeked イベントを待つ。タイムアウト（2000ms）は保険として残す。
     */
    private waitForSeek(): Promise<void> {
        return new Promise<void>(resolve => {
            let done = false;
            const finish = () => {
                if (done) return;
                done = true;
                this.video.removeEventListener('seeked', finish);
                clearTimeout(timer);
                resolve();
            };
            this.video.addEventListener('seeked', finish, { once: true });
            // シークが即完了している場合やタイムアウト保険
            const timer = setTimeout(finish, 2000);
        });
    }

    /**
     * video.readyState >= HAVE_CURRENT_DATA (2) になるまでポーリングで待つ。
     * 最大 2000ms 待って諦める。
     */
    private waitForReadyState(): Promise<void> {
        return new Promise<void>(resolve => {
            if (this.video.readyState >= 2) {
                resolve();
                return;
            }
            const deadline = Date.now() + 2000;
            const check = () => {
                if (this.video.readyState >= 2 || Date.now() >= deadline) {
                    resolve();
                } else {
                    requestAnimationFrame(check);
                }
            };
            requestAnimationFrame(check);
        });
    }

}
