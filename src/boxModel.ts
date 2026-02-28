import * as THREE from 'three';
import { Landmark } from '@mediapipe/tasks-vision';

/**
 * 2点間の接続（ボーン）を定義するインターフェース
 */
interface BoneConnection {
    start: number;
    end: number;
    name: string;
    side: 'left' | 'right' | 'center';
}

/**
 * MediaPipeの関節（Landmark）情報をThree.jsのMesh（Box）に変換して管理するクラス
 */
export class PoseBoxModel {
    private scene: THREE.Scene;
    private boxes: Map<string, THREE.Mesh> = new Map();
    private headBox: THREE.Mesh | null = null;

    // アジャスト用パラメータ
    public scaleFactor: number = 2.5;
    public adjRoll: number = 0;
    public adjPitch: number = 0;
    public offsetX: number = 0;
    public offsetY: number = 0;
    public offsetZ: number = 0;
    public headScale: number = 0.33;
    private _brightness: number = 1.0;
    public mode: 'centroid' | 'direct' = 'centroid';
    public directDepthOffset: number = 0;
    public mirrored: boolean = true;
    private _videoOpacity: number = 0.5;

    private virtualFrame: THREE.LineSegments | null = null;
    private videoPlane: THREE.Mesh | null = null;
    private videoTexture: THREE.VideoTexture | null = null;
    private frameAspectRatio: number = 16 / 9;

    public get brightness(): number {
        return this._brightness;
    }

    public set brightness(val: number) {
        this._brightness = val;
        this.updateMaterialIntensity();
    }

    public get videoOpacity(): number {
        return this._videoOpacity;
    }

    public set videoOpacity(val: number) {
        this._videoOpacity = val;
        if (this.videoPlane) {
            (this.videoPlane.material as THREE.MeshBasicMaterial).opacity = val;
        }
    }

    private updateMaterialIntensity() {
        const updateMesh = (mesh: THREE.Mesh | null) => {
            if (!mesh) return;
            const materials = mesh.material as THREE.MeshStandardMaterial[];
            if (Array.isArray(materials)) {
                // pz (Index 4) は前面なのでより明るく
                materials.forEach((mat, idx) => {
                    const baseIntensity = idx === 4 ? 0.4 : 0.1;
                    mat.emissiveIntensity = baseIntensity * this._brightness;
                });
            }
        };

        this.boxes.forEach(mesh => updateMesh(mesh));
        updateMesh(this.headBox);
    }

    // カラーパレット
    private colors = {
        right: {
            main: 0x00f2ff, // Cyan
            front: 0x00f2ff,
            back: 0x0055aa,
        },
        left: {
            main: 0xff00c8, // Accent Pink/Purple
            front: 0xff00c8,
            back: 0x880066,
        },
        center: {
            main: 0x7000ff, // Secondary Purple
            front: 0x7000ff,
            back: 0x330088,
        }
    };

    // 描画する部位の定義（MediaPipe Landmark Index）
    private connections: BoneConnection[] = [
        { start: 11, end: 12, name: 'shoulders', side: 'center' },
        { start: 11, end: 23, name: 'left_torso', side: 'left' },
        { start: 12, end: 24, name: 'right_torso', side: 'right' },
        { start: 23, end: 24, name: 'hips', side: 'center' },
        { start: 11, end: 13, name: 'left_upper_arm', side: 'left' },
        { start: 13, end: 15, name: 'left_lower_arm', side: 'left' },
        { start: 12, end: 14, name: 'right_upper_arm', side: 'right' },
        { start: 14, end: 16, name: 'right_lower_arm', side: 'right' },
        { start: 23, end: 25, name: 'left_upper_leg', side: 'left' },
        { start: 25, end: 27, name: 'left_lower_leg', side: 'left' },
        { start: 24, end: 26, name: 'right_upper_leg', side: 'right' },
        { start: 26, end: 28, name: 'right_lower_leg', side: 'right' },
    ];

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.initBoxes();
        this.initHead();
        this.initVirtualFrame();
        this.initVideoPlane();
    }

    private createMultiMaterial(side: 'left' | 'right' | 'center') {
        const c = this.colors[side];

        // Three.js BoxGeometry materials order: x+, x-, y+, y-, z+, z-
        // すべての面に emissive を設定しないと emissiveIntensity が効かないため、
        // 前面(Front)以外にもベースとなる色を設定します。

        const materials = [
            new THREE.MeshStandardMaterial({ color: c.main, emissive: c.main, emissiveIntensity: 0.1, metalness: 0.8, roughness: 0.2 }), // px
            new THREE.MeshStandardMaterial({ color: c.main, emissive: c.main, emissiveIntensity: 0.1, metalness: 0.8, roughness: 0.2 }), // nx
            new THREE.MeshStandardMaterial({ color: c.main, emissive: c.main, emissiveIntensity: 0.1, metalness: 0.8, roughness: 0.2 }), // py
            new THREE.MeshStandardMaterial({ color: c.main, emissive: c.main, emissiveIntensity: 0.1, metalness: 0.8, roughness: 0.2 }), // ny
            new THREE.MeshStandardMaterial({ color: c.front, emissive: c.front, emissiveIntensity: 0.3, metalness: 0.8, roughness: 0.2 }), // pz (Front)
            new THREE.MeshStandardMaterial({ color: c.back, emissive: c.back, emissiveIntensity: 0.05, metalness: 0.8, roughness: 0.2 }), // nz (Back)
        ];

        // 各マテリアルのベースemissiveIntensityを保存
        materials.forEach(mat => {
            mat.userData.baseEmissiveIntensity = mat.emissiveIntensity;
        });

        return materials;
    }

    private initBoxes() {
        this.connections.forEach(conn => {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const materials = this.createMultiMaterial(conn.side);
            const mesh = new THREE.Mesh(geometry, materials);
            mesh.name = conn.name;
            mesh.visible = false;
            mesh.castShadow = true;
            this.scene.add(mesh);
            this.boxes.set(conn.name, mesh);
        });
    }

    private initHead() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const materials = this.createMultiMaterial('center');
        this.headBox = new THREE.Mesh(geometry, materials);
        this.headBox.name = 'head';
        this.headBox.visible = false;
        this.headBox.castShadow = true;
        this.scene.add(this.headBox);
    }

    private initVideoPlane() {
        const width = 4;
        const height = width / this.frameAspectRatio;
        const geometry = new THREE.PlaneGeometry(width, height);
        const material = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: this._videoOpacity,
            side: THREE.DoubleSide
        });
        this.videoPlane = new THREE.Mesh(geometry, material);
        this.videoPlane.position.set(0, 1.5, -0.01); // Slightly behind the frame
        this.videoPlane.visible = false;
        this.scene.add(this.videoPlane);
    }

    private initVirtualFrame() {
        const width = 4;
        const height = width / this.frameAspectRatio;
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            -width / 2, -height / 2, 0, width / 2, -height / 2, 0,
            width / 2, -height / 2, 0, width / 2, height / 2, 0,
            width / 2, height / 2, 0, -width / 2, height / 2, 0,
            -width / 2, height / 2, 0, -width / 2, -height / 2, 0
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        const material = new THREE.LineBasicMaterial({ color: 0x00f2ff, transparent: true, opacity: 0.8 });
        this.virtualFrame = new THREE.LineSegments(geometry, material);
        this.virtualFrame.position.set(0, 1.5, 0);
        this.virtualFrame.visible = false;
        this.scene.add(this.virtualFrame);
    }

    public updateVideoSource(video: HTMLVideoElement) {
        if (!this.videoTexture) {
            this.videoTexture = new THREE.VideoTexture(video);
            this.videoTexture.colorSpace = THREE.SRGBColorSpace;
            if (this.videoPlane) {
                (this.videoPlane.material as THREE.MeshBasicMaterial).map = this.videoTexture;
            }
        }
    }

    public update(worldLandmarks: Landmark[], normalizedLandmarks: Landmark[]) {
        if (!worldLandmarks || worldLandmarks.length === 0) return;

        // 初期ロード時やリセット時に確実に明るさを反映させる
        this.updateMaterialIntensity();

        // アジャスト用回転と位置の共通化
        const euler = new THREE.Euler(this.adjPitch, 0, this.adjRoll);
        const offset = new THREE.Vector3(this.offsetX, this.offsetY, this.offsetZ);

        if (this.virtualFrame) {
            this.virtualFrame.visible = this.mode === 'direct';
            // 仮想枠も同様にZ移動させることで、パースが効いて大きさが変わる
            this.virtualFrame.position.z = this.directDepthOffset;
        }
        if (this.videoPlane) {
            this.videoPlane.visible = this.mode === 'direct';
            // ビデオプレーンを枠のわずかに後ろに配置
            this.videoPlane.position.z = this.directDepthOffset - 0.01;
        }

        const width = 4;
        const height = width / this.frameAspectRatio;

        this.connections.forEach(conn => {
            const mesh = this.boxes.get(conn.name);
            if (!mesh) return;

            let p1: THREE.Vector3;
            let p2: THREE.Vector3;

            if (this.mode === 'centroid') {
                const s = worldLandmarks[conn.start];
                const e = worldLandmarks[conn.end];
                p1 = new THREE.Vector3(s.x, -s.y, -s.z);
                p2 = new THREE.Vector3(e.x, -e.y, -e.z);

                if (this.mirrored) {
                    p1.x *= -1;
                    p2.x *= -1;
                }

                p1.applyEuler(euler).multiplyScalar(this.scaleFactor).add(offset);
                p2.applyEuler(euler).multiplyScalar(this.scaleFactor).add(offset);
            } else {
                const s = normalizedLandmarks[conn.start];
                const e = normalizedLandmarks[conn.end];
                const ws = worldLandmarks[conn.start];
                const we = worldLandmarks[conn.end];

                // ダイレクトマッピング: 正規化座標 (0-1) を仮想フレーム (4x2.25) 内に配置
                // ミラーリング対応
                const x1 = this.mirrored ? (0.5 - s.x) : (s.x - 0.5);
                const x2 = this.mirrored ? (0.5 - e.x) : (e.x - 0.5);

                p1 = new THREE.Vector3(x1 * width, (0.5 - s.y) * height + 1.5, -ws.z * this.scaleFactor + this.directDepthOffset);
                p2 = new THREE.Vector3(x2 * width, (0.5 - e.y) * height + 1.5, -we.z * this.scaleFactor + this.directDepthOffset);
            }

            // 中心位置の設定
            const center = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
            mesh.position.copy(center);

            // 方向と長さの計算
            const direction = new THREE.Vector3().subVectors(p2, p1);
            const distance = direction.length();

            // スケールに応じた太さの調節 (全モードで scaleFactor に追従)
            const thickness = 0.04 * this.scaleFactor;
            mesh.scale.set(thickness, thickness, distance);

            // 回転（p2の方向を向かせる）
            mesh.lookAt(p2);
            mesh.visible = true;
        });

        this.updateHead(worldLandmarks, normalizedLandmarks, euler, offset, width, height);
    }

    private updateHead(worldLandmarks: Landmark[], normalizedLandmarks: Landmark[], euler: THREE.Euler, offset: THREE.Vector3, width: number, height: number) {
        if (!this.headBox) return;

        const nose = worldLandmarks[0];
        const nNose = normalizedLandmarks[0];
        const leftEar = worldLandmarks[7];
        const rightEar = worldLandmarks[8];

        if (!nose || !leftEar || !rightEar) return;

        let pNose: THREE.Vector3;
        let headSize: number;

        if (this.mode === 'centroid') {
            pNose = new THREE.Vector3(nose.x, -nose.y, -nose.z);
            if (this.mirrored) pNose.x *= -1;
            pNose.applyEuler(euler).multiplyScalar(this.scaleFactor).add(offset);
            const pLEar = new THREE.Vector3(leftEar.x, -leftEar.y, -leftEar.z);
            const pREar = new THREE.Vector3(rightEar.x, -rightEar.y, -rightEar.z);
            headSize = pLEar.distanceTo(pREar) * 1.2 * this.scaleFactor * this.headScale;
        } else {
            // X方向の反転を修正
            const nx = this.mirrored ? (0.5 - nNose.x) : (nNose.x - 0.5);
            pNose = new THREE.Vector3(nx * width, (0.5 - nNose.y) * height + 1.5, -nose.z * this.scaleFactor + this.directDepthOffset);
            const nLEar = normalizedLandmarks[7];
            const nREar = normalizedLandmarks[8];
            const xL = this.mirrored ? (0.5 - nLEar.x) : (nLEar.x - 0.5);
            const xR = this.mirrored ? (0.5 - nREar.x) : (nREar.x - 0.5);
            const pLEar = new THREE.Vector3(xL * width, (0.5 - nLEar.y) * height + 1.5, this.directDepthOffset);
            const pREar = new THREE.Vector3(xR * width, (0.5 - nREar.y) * height + 1.5, this.directDepthOffset);
            headSize = pLEar.distanceTo(pREar) * 1.5 * this.headScale * this.scaleFactor;
        }

        this.headBox.position.copy(pNose);
        this.headBox.position.y += headSize * 0.1;
        this.headBox.scale.set(headSize, headSize, headSize);
        this.headBox.visible = true;
    }
}
