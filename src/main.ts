import { PoseScene } from './scene';
import { PoseProcessor } from './pose';
import { PoseCylinderModel } from './cylinderModel';
import { FrameCaptureManager } from './capture';

async function main() {
    const statusEl = document.getElementById('status');
    const videoEl = document.getElementById('webcam') as HTMLVideoElement;

    // UI要素の取得
    const btnWebcam = document.getElementById('btn-webcam') as HTMLButtonElement;
    const fileInput = document.getElementById('video-upload') as HTMLInputElement;
    const videoControls = document.getElementById('video-controls') as HTMLDivElement;
    const btnPlayPause = document.getElementById('btn-play-pause') as HTMLButtonElement;
    const videoSeek = document.getElementById('video-seek') as HTMLInputElement;
    const videoTime = document.getElementById('video-time') as HTMLSpanElement;
    const videoSpeed = document.getElementById('video-speed') as HTMLInputElement;
    const speedLabel = document.getElementById('speed-label') as HTMLLabelElement;
    const btnStep = document.getElementById('btn-step') as HTMLButtonElement;
    const btnStepBack = document.getElementById('btn-step-back') as HTMLButtonElement;

    const btnSetA = document.getElementById('btn-set-a') as HTMLButtonElement;
    const btnSetB = document.getElementById('btn-set-b') as HTMLButtonElement;
    const btnToggleRepeat = document.getElementById('btn-toggle-repeat') as HTMLButtonElement;
    const btnClearAB = document.getElementById('btn-clear-ab') as HTMLButtonElement;
    const statusTextAB = document.getElementById('ab-status-text') as HTMLSpanElement;
    const valA = document.getElementById('point-a-val') as HTMLSpanElement;
    const valB = document.getElementById('point-b-val') as HTMLSpanElement;

    // キャリブレーションスライダー
    const sliderSmooth = document.getElementById('adj-smooth') as HTMLInputElement;
    const sliderRoll = document.getElementById('adj-roll') as HTMLInputElement;
    const sliderPitch = document.getElementById('adj-pitch') as HTMLInputElement;
    const sliderScale = document.getElementById('adj-scale') as HTMLInputElement;
    const sliderX = document.getElementById('adj-x') as HTMLInputElement;
    const sliderY = document.getElementById('adj-y') as HTMLInputElement;
    const sliderZ = document.getElementById('adj-z') as HTMLInputElement;
    const sliderHeadScale = document.getElementById('adj-head-scale') as HTMLInputElement;
    const sliderBodyThickness = document.getElementById('adj-body-thickness') as HTMLInputElement;
    const sliderBoneLength = document.getElementById('adj-bone-length') as HTMLInputElement;
    const sliderDirectDepth = document.getElementById('adj-direct-depth') as HTMLInputElement;
    const sliderVideoOpacity = document.getElementById('adj-video-opacity') as HTMLInputElement;
    const btnResetCalibration = document.getElementById('btn-reset-calibration') as HTMLButtonElement;

    // 状態管理変数
    let isFrameStep = false;
    let pointA: number | null = null;
    let pointB: number | null = null;
    let isABRepeatActive = false;

    try {
        // 1. 各モジュールの初期化
        const poseScene = new PoseScene('canvas-container');
        const poseProcessor = new PoseProcessor(videoEl, (status, message) => {
            if (statusEl && message) {
                statusEl.innerText = message;
                statusEl.style.color = status === 'error' ? '#ff4444' : '';
            }
        });
        const boxModel = new PoseCylinderModel(poseScene.scene);

        await poseProcessor.init();
        await poseProcessor.startCamera();

        // 2. UIイベントの設定
        btnWebcam?.addEventListener('click', async () => {
            await poseProcessor.startCamera();
            boxModel.mirrored = true;
            videoControls.style.display = 'none';
            btnWebcam.classList.add('active');
            document.querySelector('.file-label')?.classList.remove('active');
        });

        fileInput?.addEventListener('change', async (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                await poseProcessor.setVideoSource(file);
                boxModel.mirrored = false;
                videoControls.style.display = 'block';
                if (btnPlayPause) btnPlayPause.innerText = 'Pause';
                btnWebcam?.classList.remove('active');
                const label = document.querySelector('.file-label');
                if (label) label.classList.add('active');
                // ダウンロードリンクが残っていればリセット
                const dl = document.getElementById('capture-download') as HTMLAnchorElement;
                if (dl) dl.style.display = 'none';
            }
        });

        // -------- Capture セットアップ --------
        const captureCanvas = poseScene.renderer.domElement;
        const captureManager = new FrameCaptureManager(captureCanvas, videoEl);

        const btnCaptureStart = document.getElementById('btn-capture-start') as HTMLButtonElement;
        const btnCaptureStop = document.getElementById('btn-capture-stop') as HTMLButtonElement;
        const captureProgress = document.getElementById('capture-progress') as HTMLDivElement;
        const captureDownload = document.getElementById('capture-download') as HTMLAnchorElement;

        btnCaptureStart?.addEventListener('click', async () => {
            // 引数の決定：A-B区間 または動画全体
            const startTime = pointA ?? 0;
            const endTime = pointB ?? videoEl.duration ?? 0;
            if (endTime <= startTime) { alert('Invalid range'); return; }

            // キャプチャ中は動画を一時停止
            videoEl.pause();
            if (btnPlayPause) btnPlayPause.innerText = 'Play';

            btnCaptureStart.style.display = 'none';
            btnCaptureStop.style.display = '';
            captureProgress.style.display = 'block';
            captureDownload.style.display = 'none';
            captureProgress.innerText = 'Preparing...';

            if (videoEl.duration === Infinity) {
                alert('Webcam capture is not supported. Please use a video file.');
                btnCaptureStart.style.display = '';
                btnCaptureStop.style.display = 'none';
                captureProgress.style.display = 'none';
                return;
            }

            console.log("[Capture] Re-initializing Landmarker...");
            await poseProcessor.reinit();

            await captureManager.startCapture(
                { startTime, endTime, fps: 30 },
                {
                    onRender: (videoTimeMs) => {
                        // ポーズ推定 + レンダリング
                        const results = poseProcessor.estimate(videoTimeMs);
                        if (results?.worldLandmarks?.length && results?.landmarks?.length) {
                            boxModel.updateVideoSource(videoEl);
                            boxModel.update(results.worldLandmarks[0], results.landmarks[0]);
                        }
                        poseScene.render();
                    },
                    onProgress: (frame, total) => {
                        captureProgress.innerText = `${frame} / ${total} frames`;
                    },
                    onComplete: (blob) => {
                        const url = URL.createObjectURL(blob);
                        captureDownload.href = url;
                        captureDownload.style.display = 'block';
                        captureProgress.innerText = '✅ Complete!';
                        btnCaptureStop.style.display = 'none';
                        btnCaptureStart.style.display = '';
                    },
                    onError: (err) => {
                        captureProgress.innerText = `❌ ${err.message}`;
                        btnCaptureStop.style.display = 'none';
                        btnCaptureStart.style.display = '';
                    },
                }
            );
        });

        btnCaptureStop?.addEventListener('click', () => {
            captureManager.stopCapture();
            btnCaptureStop.style.display = 'none';
            btnCaptureStart.style.display = '';
            captureProgress.innerText = '⏹ Stopped';
        });
        // ---------------------------------

        const btnModeCentroid = document.getElementById('btn-mode-centroid') as HTMLButtonElement;
        const btnModeDirect = document.getElementById('btn-mode-direct') as HTMLButtonElement;
        const gridToggleRow = document.getElementById('grid-toggle-row') as HTMLDivElement;
        const btnToggleGrid = document.getElementById('btn-toggle-grid') as HTMLButtonElement;

        btnModeCentroid?.addEventListener('click', () => {
            boxModel.mode = 'centroid';
            btnModeCentroid.classList.add('active');
            btnModeDirect.classList.remove('active');
            // グリッドトグル行を隠し、グリッドをリセット
            gridToggleRow.style.display = 'none';
            boxModel.showFloorGrid = false;
            btnToggleGrid.innerText = 'Grid: OFF';
            btnToggleGrid.classList.remove('active');
        });

        btnModeDirect?.addEventListener('click', () => {
            boxModel.mode = 'direct';
            btnModeDirect.classList.add('active');
            btnModeCentroid.classList.remove('active');
            // グリッドトグル行を表示
            gridToggleRow.style.display = 'flex';
        });

        btnToggleGrid?.addEventListener('click', () => {
            boxModel.showFloorGrid = !boxModel.showFloorGrid;
            btnToggleGrid.innerText = boxModel.showFloorGrid ? 'Grid: ON' : 'Grid: OFF';
            btnToggleGrid.classList.toggle('active', boxModel.showFloorGrid);
        });

        btnPlayPause?.addEventListener('click', () => {
            if (isFrameStep) return;
            if (videoEl.paused) {
                videoEl.play();
                btnPlayPause.innerText = 'Pause';
            } else {
                videoEl.pause();
                btnPlayPause.innerText = 'Play';
            }
        });

        videoSeek?.addEventListener('input', () => {
            if (videoEl.duration) {
                videoEl.currentTime = (parseFloat(videoSeek.value) / 100) * videoEl.duration;
            }
        });

        videoSpeed?.addEventListener('input', () => {
            const val = parseFloat(videoSpeed.value);
            if (val === 0) {
                isFrameStep = true;
                videoEl.pause();
                btnPlayPause.innerText = 'Play';
                speedLabel.innerText = 'Speed: Frame-by-frame';
            } else {
                isFrameStep = false;
                videoEl.playbackRate = val;
                speedLabel.innerText = `Speed: ${val.toFixed(2)}x`;
            }
        });

        btnStep?.addEventListener('click', () => {
            if (videoEl.duration) {
                videoEl.currentTime = Math.min(videoEl.currentTime + 1 / 30, videoEl.duration);
            }
        });

        btnStepBack?.addEventListener('click', () => {
            videoEl.currentTime = Math.max(videoEl.currentTime - 1 / 30, 0);
        });

        const updateABUI = () => {
            const formatTime = (seconds: number) => {
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            };
            valA.innerText = pointA !== null ? formatTime(pointA) : '--:--';
            valB.innerText = pointB !== null ? formatTime(pointB) : '--:--';
            statusTextAB.innerText = isABRepeatActive ? 'LOOP ON' : 'LOOP OFF';
        };

        btnSetA?.addEventListener('click', () => {
            pointA = videoEl.currentTime;
            updateABUI();
        });

        btnSetB?.addEventListener('click', () => {
            pointB = videoEl.currentTime;
            updateABUI();
        });

        btnToggleRepeat?.addEventListener('click', () => {
            if (pointA === null || pointB === null || pointA >= pointB) {
                alert('Invalid A-B points');
                return;
            }
            isABRepeatActive = !isABRepeatActive;
            updateABUI();
        });

        btnClearAB?.addEventListener('click', () => {
            pointA = null;
            pointB = null;
            isABRepeatActive = false;
            updateABUI();
        });

        const degToRad = (deg: number) => deg * (Math.PI / 180);
        boxModel.adjRoll = degToRad(2); // 右を上げる補正に修正

        sliderSmooth?.addEventListener('input', (e) => {
            poseProcessor.smoothAlpha = parseFloat((e.target as HTMLInputElement).value);
        });
        sliderRoll?.addEventListener('input', (e) => {
            boxModel.adjRoll = degToRad(parseFloat((e.target as HTMLInputElement).value));
        });
        sliderPitch?.addEventListener('input', (e) => {
            boxModel.adjPitch = degToRad(parseFloat((e.target as HTMLInputElement).value));
        });
        sliderScale?.addEventListener('input', (e) => {
            boxModel.scaleFactor = parseFloat((e.target as HTMLInputElement).value);
        });
        sliderX?.addEventListener('input', (e) => {
            boxModel.offsetX = parseFloat((e.target as HTMLInputElement).value);
        });
        sliderY?.addEventListener('input', (e) => {
            boxModel.offsetY = parseFloat((e.target as HTMLInputElement).value);
        });
        sliderZ?.addEventListener('input', (e) => {
            boxModel.offsetZ = parseFloat((e.target as HTMLInputElement).value);
        });
        sliderHeadScale?.addEventListener('input', (e) => {
            boxModel.headScale = parseFloat((e.target as HTMLInputElement).value);
        });
        sliderBodyThickness?.addEventListener('input', (e) => {
            boxModel.bodyThickness = parseFloat((e.target as HTMLInputElement).value);
        });
        sliderBoneLength?.addEventListener('input', (e) => {
            boxModel.boneLengthScale = parseFloat((e.target as HTMLInputElement).value);
        });

        sliderDirectDepth?.addEventListener('input', (e) => {
            boxModel.directDepthOffset = parseFloat((e.target as HTMLInputElement).value);
        });

        sliderVideoOpacity?.addEventListener('input', (e) => {
            boxModel.videoOpacity = parseFloat((e.target as HTMLInputElement).value);
        });

        const sliderBrightness = document.getElementById('adj-brightness') as HTMLInputElement;
        sliderBrightness?.addEventListener('input', (e) => {
            boxModel.brightness = parseFloat((e.target as HTMLInputElement).value);
        });

        btnResetCalibration?.addEventListener('click', () => {
            // デフォルト値
            const defaults = {
                smooth: 0.35,
                scale: 2.5,
                headScale: 0.33,
                bodyThickness: 0.15,
                boneLength: 1.0,
                brightness: 1.0,
                roll: 2,
                pitch: 0,
                x: 0, y: 0, z: 0,
                directDepth: 0,
                videoOpacity: 0.5
            };

            // モデルの更新
            poseProcessor.smoothAlpha = defaults.smooth;
            boxModel.scaleFactor = defaults.scale;
            boxModel.headScale = defaults.headScale;
            boxModel.bodyThickness = defaults.bodyThickness;
            boxModel.boneLengthScale = defaults.boneLength;
            boxModel.brightness = defaults.brightness;
            boxModel.directDepthOffset = defaults.directDepth;
            boxModel.adjRoll = degToRad(defaults.roll);
            boxModel.adjPitch = degToRad(defaults.pitch);
            boxModel.offsetX = defaults.x;
            boxModel.offsetY = defaults.y;
            boxModel.offsetZ = defaults.z;
            boxModel.videoOpacity = defaults.videoOpacity;

            // UIの更新
            if (sliderSmooth) sliderSmooth.value = defaults.smooth.toString();
            if (sliderScale) sliderScale.value = defaults.scale.toString();
            if (sliderHeadScale) sliderHeadScale.value = defaults.headScale.toString();
            if (sliderBodyThickness) sliderBodyThickness.value = defaults.bodyThickness.toString();
            if (sliderBoneLength) sliderBoneLength.value = defaults.boneLength.toString();
            if (sliderBrightness) sliderBrightness.value = defaults.brightness.toString();
            if (sliderRoll) sliderRoll.value = defaults.roll.toString();
            if (sliderPitch) sliderPitch.value = defaults.pitch.toString();
            if (sliderX) sliderX.value = defaults.x.toString();
            if (sliderY) sliderY.value = defaults.y.toString();
            if (sliderZ) sliderZ.value = defaults.z.toString();
            if (sliderDirectDepth) sliderDirectDepth.value = defaults.directDepth.toString();
            if (sliderVideoOpacity) sliderVideoOpacity.value = defaults.videoOpacity.toString();
        });

        // 3. メインループ
        function loop() {
            if (videoControls.style.display === 'block' && videoEl.duration) {
                videoSeek.value = ((videoEl.currentTime / videoEl.duration) * 100).toString();
                const currentStr = Math.floor(videoEl.currentTime / 60).toString().padStart(2, '0') + ':' + Math.floor(videoEl.currentTime % 60).toString().padStart(2, '0');
                const totalStr = Math.floor(videoEl.duration / 60).toString().padStart(2, '0') + ':' + Math.floor(videoEl.duration % 60).toString().padStart(2, '0');
                videoTime.innerText = `${currentStr} / ${totalStr}`;
            }

            if (isABRepeatActive && pointA !== null && pointB !== null && videoEl.currentTime >= pointB) {
                videoEl.currentTime = pointA;
            }

            // 2. ポーズ推定（キャプチャ中はキャプチャ側で行うためスキップ）
            if (!captureManager.capturing) {
                const results = poseProcessor.estimate(performance.now());
                if (results && results.worldLandmarks?.length && results.landmarks?.length) {
                    boxModel.updateVideoSource(videoEl);
                    boxModel.update(results.worldLandmarks[0], results.landmarks[0]);
                }
            }

            poseScene.render();
            requestAnimationFrame(loop);
        }
        loop();

    } catch (error) {
        console.error(error);
        if (statusEl) {
            statusEl.innerText = `Error: ${(error as Error).message}`;
            statusEl.style.color = '#ff4444';
        }
    }
}

main();
