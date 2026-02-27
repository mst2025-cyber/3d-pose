import { PoseLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

export type PoseStatus = 'loading' | 'camera_starting' | 'file_loading' | 'running_webcam' | 'running_file' | 'error';

/**
 * MediaPipeによるポーズ推定を管理するクラス
 */
export class PoseProcessor {
    private poseLandmarker: PoseLandmarker | null = null;
    private video: HTMLVideoElement;
    private onStatusChange?: (status: PoseStatus, message?: string) => void;

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

    /**
     * 1フレームのポーズ推定を実行
     */
    public estimate(timestamp: number) {
        if (!this.poseLandmarker || this.video.readyState < 2) return null;
        return this.poseLandmarker.detectForVideo(this.video, timestamp);
    }
}
