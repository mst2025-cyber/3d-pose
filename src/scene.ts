import * as THREE from 'three';

/**
 * Three.jsのシーンセットアップを管理するクラス
 */
export class PoseScene {
    public scene: THREE.Scene;
    public camera: THREE.PerspectiveCamera;
    public renderer: THREE.WebGLRenderer;

    private sidebarWidth: number = 340; // 320px (sidebar) + 20px (left margin)

    constructor(containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) throw new Error(`Container #${containerId} not found`);

        // シーンの作成
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x111111);

        // カメラの作成
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 1.5, 4); // 人物の中心付近を見下ろす位置

        // レンダラーの作成
        this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        // 初期オフセットの設定
        this.updateCameraOffset();

        // ライティング
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(directionalLight);

        // ウィンドウリサイズ対応
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    private updateCameraOffset() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        // サイドバー分を考慮した「視覚的な中心」のズレを計算
        // 右側領域の中心 = sidebarWidth + (w - sidebarWidth) / 2
        // これは w/2 + sidebarWidth/2 と同じ。
        // つまり本来の中心(w/2)から sidebarWidth/2 だけ右にずらしたい。
        const offsetX = -this.sidebarWidth / 2;
        this.camera.setViewOffset(w, h, offsetX, 0, w, h);
    }

    private onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.updateCameraOffset();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    public render() {
        this.renderer.render(this.scene, this.camera);
    }
}
