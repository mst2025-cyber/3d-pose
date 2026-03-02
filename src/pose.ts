import { PoseLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import type { Landmark } from '@mediapipe/tasks-vision';

export type PoseStatus = 'loading' | 'camera_starting' | 'file_loading' | 'running_webcam' | 'running_file' | 'error';

/**
 * EMA（指数移動平均）でランドマーク座標を平滑化するクラス。
 * alpha: 0〜1。小さいほど強くスムージング（0.3が推奨）、1.0で無効。
 */
class EMALandmarkSmoother {
    public alpha: number;
    private prevWorld: Landmark[][] | null = null;
    private prevNorm: Landmark[][] | null = null;

    constructor(alpha: number = 0.35) {
        this.alpha = alpha;
    }

    private smoothSet(current: Landmark[], prev: Landmark[]): Landmark[] {
        return current.map((lm, i) => {
            const p = prev[i];
            if (!p) return lm;
            return {
                x: this.alpha * lm.x + (1 - this.alpha) * p.x,
                y: this.alpha * lm.y + (1 - this.alpha) * p.y,
                z: this.alpha * lm.z + (1 - this.alpha) * p.z,
            };
        });
    }

    public smooth(worldLandmarks: Landmark[][], normalizedLandmarks: Landmark[][])
        : { worldLandmarks: Landmark[][], normalizedLandmarks: Landmark[][] } {

        const smoothedWorld = this.prevWorld
            ? worldLandmarks.map((set, i) =>
                this.prevWorld![i] ? this.smoothSet(set, this.prevWorld![i]) : set)
            : worldLandmarks;

        const smoothedNorm = this.prevNorm
            ? normalizedLandmarks.map((set, i) =>
                this.prevNorm![i] ? this.smoothSet(set, this.prevNorm![i]) : set)
            : normalizedLandmarks;

        this.prevWorld = smoothedWorld;
        this.prevNorm = smoothedNorm;

        return { worldLandmarks: smoothedWorld, normalizedLandmarks: smoothedNorm };
    }

    /** ソース切り替え時などに履歴をリセット */
    public reset() {
        this.prevWorld = null;
        this.prevNorm = null;
    }
}

/**
 * MediaPipeによるポーズ推定を管理するクラス
 */
export class PoseProcessor {
    private poseLandmarker: PoseLandmarker | null = null;
    private video: HTMLVideoElement;
    private onStatusChange?: (status: PoseStatus, message?: string) => void;
    private smoother: EMALandmarkSmoother = new EMALandmarkSmoother(0.35);

    /** スムージング強度 (0〜1)。1.0で無効、0.2で強め */
    public get smoothAlpha(): number { return this.smoother.alpha; }
    public set smoothAlpha(v: number) { this.smoother.alpha = Math.max(0.01, Math.min(1, v)); }

    constructor(videoElement: HTMLVideoElement, onStatusChange?: (status: PoseStatus, message?: string) => void) {
        this.video = videoElement;
        this.onStatusChange = onStatusChange;
    }

    /**
     * MediaPipeの初期化
     */
    public async init() {
        try {
            this.updateStatus('loading', 'MediaPipeモデルをロード中...');

            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.9/wasm"
            );

            this.poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task`,
                    delegate: "GPU"
                },
                runningMode: "VIDEO",
                numPoses: 1,
                minPoseDetectionConfidence: 0.5,
                minPosePresenceConfidence: 0.5,
                minTrackingConfidence: 0.5
            });
        } catch (error) {
            this.updateStatus('error', `モデルのロードに失敗しました: ${(error as Error).message}`);
            throw error;
        }
    }

    /**
     * ウェブカメラの起動
     */
    public async startCamera() {
        try {
            this.updateStatus('camera_starting', 'カメラを起動中...');

            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error("Webブラウザがカメラ入力をサポートしていません。");
            }

            this.stopCurrentSource();
            this.smoother.reset(); // ソース切替時に履歴リセット

            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 1280, height: 720 }
            });

            this.video.srcObject = stream;
            this.video.src = "";
            this.video.style.transform = "scaleX(-1)";

            return new Promise((resolve, reject) => {
                this.video.onloadedmetadata = () => {
                    this.video.play().then(() => {
                        this.updateStatus('running_webcam', '実行中 (Webcam)');
                        resolve(true);
                    }).catch(reject);
                };
                this.video.onerror = () => reject(new Error("ビデオの読み込みに失敗しました"));
            });
        } catch (error) {
            this.updateStatus('error', `カメラの起動に失敗しました: ${(error as Error).message}`);
            throw error;
        }
    }

    /**
     * 動画ファイルのソースを設定
     */
    public async setVideoSource(file: File) {
        try {
            this.updateStatus('file_loading', 'ビデオファイルを読み込み中...');

            this.stopCurrentSource();
            this.smoother.reset(); // ソース切替時に履歴リセット

            const url = URL.createObjectURL(file);
            this.video.srcObject = null;
            this.video.src = url;
            this.video.style.transform = "scaleX(1)";

            return new Promise((resolve, reject) => {
                this.video.onloadedmetadata = () => {
                    this.video.play().then(() => {
                        this.updateStatus('running_file', `実行中 (File: ${file.name})`);
                        resolve(true);
                    }).catch(reject);
                };
                this.video.onerror = () => reject(new Error("ビデオファイルの再生に失敗しました"));
            });
        } catch (error) {
            this.updateStatus('error', `ファイルの読み込みに失敗しました: ${(error as Error).message}`);
            throw error;
        }
    }

    private updateStatus(status: PoseStatus, message?: string) {
        if (this.onStatusChange) {
            this.onStatusChange(status, message);
        }
    }

    /**
     * 現在のソースを停止
     */
    private stopCurrentSource() {
        if (this.video.srcObject) {
            const stream = this.video.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
        }
        if (this.video.src) {
            URL.revokeObjectURL(this.video.src);
        }
    }

    private lastTimestamp = -1;
    private timestampOffset = 0;

    /**
     * 1フレームのポーズ推定を実行（EMAスムージング済み）
     * MediaPipeのビデオモードではタイムスタンプが厳密に増加する必要があるため、
     * 内部でオフセットを管理して逆転を防ぐ。
     */
    public estimate(timestamp: number) {
        if (!this.poseLandmarker || this.video.readyState < 2) return null;

        let effectiveTimestamp = timestamp + this.timestampOffset;
        if (effectiveTimestamp <= this.lastTimestamp) {
            // タイムスタンプが逆転または重複した場合（ソース切り替え、ループ時、キャプチャ開始時など）
            // 前回よりも1ms先になるようにオフセットを調整する
            this.timestampOffset = (this.lastTimestamp - timestamp) + 1;
            effectiveTimestamp = timestamp + this.timestampOffset;
        }
        this.lastTimestamp = effectiveTimestamp;

        try {
            const raw = this.poseLandmarker.detectForVideo(this.video, effectiveTimestamp);
            if (!raw || !raw.worldLandmarks?.length || !raw.landmarks?.length) return raw;

            const { worldLandmarks, normalizedLandmarks } = this.smoother.smooth(
                raw.worldLandmarks, raw.landmarks
            );
            return { ...raw, worldLandmarks, landmarks: normalizedLandmarks };
        } catch (error) {
            console.error("MediaPipe estimate error:", error);
            // エラーが発生してもクラッシュさせず、nullを返してお茶を濁す
            return null;
        }
    }
}
