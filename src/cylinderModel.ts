// src/cylinderModel.ts
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
 * MediaPipeの関節（Landmark）情報をThree.jsのMesh（Cylinder）に変換して管理するクラス
 * PoseBoxModel と同様の API を提供します。
 */
export class PoseCylinderModel {
    private scene: THREE.Scene;
    private cylinders: Map<string, THREE.Mesh> = new Map();
    private headBox: THREE.Mesh | null = null;

    // 調整パラメータ（BoxModel と同様）
    public scaleFactor: number = 2.5;
    public adjRoll: number = 0;
    public adjPitch: number = 0;
    public offsetX: number = 0;
    public offsetY: number = 0;
    public offsetZ: number = 0;
    public headScale: number = 0.33;
    public bodyThickness: number = 0.15;
    public boneLengthScale: number = 1.0;
    private _brightness: number = 1.0;
    public mode: 'centroid' | 'direct' = 'centroid';
    public directDepthOffset: number = 0;
    public mirrored: boolean = true;
    private _videoOpacity: number = 0.5;
    public showFloorGrid: boolean = false;

    private virtualFrame: THREE.LineSegments | null = null;
    private videoPlane: THREE.Mesh | null = null;
    private videoTexture: THREE.VideoTexture | null = null;
    private floorGrid: THREE.GridHelper | null = null;
    private frameAspectRatio: number = 16 / 9;

    public get brightness(): number { return this._brightness; }
    public set brightness(val: number) { this._brightness = val; this.updateMaterialIntensity(); }
    public get videoOpacity(): number { return this._videoOpacity; }
    public set videoOpacity(val: number) { this._videoOpacity = val; if (this.videoPlane) { (this.videoPlane.material as THREE.MeshBasicMaterial).opacity = val; } }

    private colors = {
        right: { main: 0x00f2ff, front: 0x00f2ff, back: 0x0055aa },
        left: { main: 0xff00c8, front: 0xff00c8, back: 0x880066 },
        center: { main: 0x7000ff, front: 0x7000ff, back: 0x330088 }
    };

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
        this.initCylinders();
        this.initHead();
        this.initVirtualFrame();
        this.initVideoPlane();
        this.initFloorGrid();
    }

    private createMultiMaterial(side: 'left' | 'right' | 'center') {
        const c = this.colors[side];
        const materials = [
            new THREE.MeshStandardMaterial({ color: c.main, emissive: c.main, emissiveIntensity: 0.1, metalness: 0.8, roughness: 0.2 }), // px
            new THREE.MeshStandardMaterial({ color: c.main, emissive: c.main, emissiveIntensity: 0.1, metalness: 0.8, roughness: 0.2 }), // nx
            new THREE.MeshStandardMaterial({ color: c.main, emissive: c.main, emissiveIntensity: 0.1, metalness: 0.8, roughness: 0.2 }), // py
            new THREE.MeshStandardMaterial({ color: c.main, emissive: c.main, emissiveIntensity: 0.1, metalness: 0.8, roughness: 0.2 }), // ny
            new THREE.MeshStandardMaterial({ color: c.front, emissive: c.front, emissiveIntensity: 0.3, metalness: 0.8, roughness: 0.2 }), // pz (Front)
            new THREE.MeshStandardMaterial({ color: c.back, emissive: c.back, emissiveIntensity: 0.05, metalness: 0.8, roughness: 0.2 }) // nz (Back)
        ];
        materials.forEach(m => { (m as any).userData.baseEmissiveIntensity = m.emissiveIntensity; });
        return materials;
    }

    private initCylinders() {
        this.connections.forEach(conn => {
            const geometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
            const materials = this.createMultiMaterial(conn.side);
            const mesh = new THREE.Mesh(geometry, materials);
            mesh.name = conn.name;
            mesh.visible = false;
            mesh.castShadow = true;
            this.scene.add(mesh);
            this.cylinders.set(conn.name, mesh);
        });
    }

    private initHead() {
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const c = this.colors['center'];
        const material = new THREE.MeshStandardMaterial({ color: c.main, emissive: c.main, emissiveIntensity: 0.3, metalness: 0.8, roughness: 0.2 });
        (material as any).userData.baseEmissiveIntensity = material.emissiveIntensity;
        this.headBox = new THREE.Mesh(geometry, material);
        this.headBox.name = 'head';
        this.headBox.visible = false;
        this.headBox.castShadow = true;
        this.scene.add(this.headBox);
    }

    private initFloorGrid() {
        const grid = new THREE.GridHelper(10, 20, 0x00f2ff, 0x003344);
        const mats = Array.isArray(grid.material) ? grid.material : [grid.material];
        mats.forEach(m => { m.transparent = true; m.opacity = 0.18; });
        grid.position.set(0, 0, 0);
        grid.visible = false;
        this.scene.add(grid);
        this.floorGrid = grid;
    }

    private initVideoPlane() {
        const width = 4;
        const height = width / this.frameAspectRatio;
        const geometry = new THREE.PlaneGeometry(width, height);
        const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: this._videoOpacity, side: THREE.DoubleSide });
        this.videoPlane = new THREE.Mesh(geometry, material);
        this.videoPlane.position.set(0, 1.5, -0.01);
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

    private updateMaterialIntensity() {
        const updateMesh = (mesh: THREE.Mesh | null) => {
            if (!mesh) return;
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((m: any) => {
                if (m.emissiveIntensity !== undefined) {
                    m.emissiveIntensity = (m.userData.baseEmissiveIntensity || 0.1) * this._brightness;
                }
            });
        };
        this.cylinders.forEach(m => updateMesh(m));
        updateMesh(this.headBox);
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
        this.updateMaterialIntensity();
        const euler = new THREE.Euler(this.adjPitch, 0, this.adjRoll);
        const offset = new THREE.Vector3(this.offsetX, this.offsetY, this.offsetZ);
        if (this.virtualFrame) {
            this.virtualFrame.visible = this.mode === 'direct';
            this.virtualFrame.position.z = this.directDepthOffset;
        }
        if (this.videoPlane) {
            this.videoPlane.visible = this.mode === 'direct';
            this.videoPlane.position.z = this.directDepthOffset - 0.01;
        }
        if (this.floorGrid) {
            this.floorGrid.visible = this.mode === 'direct' && this.showFloorGrid;
        }
        const width = 4;
        const height = width / this.frameAspectRatio;
        this.connections.forEach(conn => {
            const mesh = this.cylinders.get(conn.name);
            if (!mesh) return;
            let p1: THREE.Vector3, p2: THREE.Vector3;
            if (this.mode === 'centroid') {
                const s = worldLandmarks[conn.start];
                const e = worldLandmarks[conn.end];
                p1 = new THREE.Vector3(s.x, -s.y, -s.z);
                p2 = new THREE.Vector3(e.x, -e.y, -e.z);
                if (this.mirrored) { p1.x *= -1; p2.x *= -1; }
                p1.applyEuler(euler).multiplyScalar(this.scaleFactor).add(offset);
                p2.applyEuler(euler).multiplyScalar(this.scaleFactor).add(offset);
            } else {
                const s = normalizedLandmarks[conn.start];
                const e = normalizedLandmarks[conn.end];
                const ws = worldLandmarks[conn.start];
                const we = worldLandmarks[conn.end];
                const x1 = this.mirrored ? (0.5 - s.x) : (s.x - 0.5);
                const x2 = this.mirrored ? (0.5 - e.x) : (e.x - 0.5);
                p1 = new THREE.Vector3(x1 * width, (0.5 - s.y) * height + 1.5, -ws.z * this.scaleFactor + this.directDepthOffset);
                p2 = new THREE.Vector3(x2 * width, (0.5 - e.y) * height + 1.5, -we.z * this.scaleFactor + this.directDepthOffset);
            }
            const center = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
            mesh.position.copy(center);
            const direction = new THREE.Vector3().subVectors(p2, p1);
            const distance = direction.length() * this.boneLengthScale;
            const thickness = this.bodyThickness * this.scaleFactor; // Use bodyThickness instead of headScale
            // Cylinder default height = 1 along Y axis; we scale Y to half-length because cylinder is centered.
            mesh.scale.set(thickness, distance / 2, thickness);
            mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
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
        const nLEar = normalizedLandmarks[7];
        const nREar = normalizedLandmarks[8];

        if (!nose || !leftEar || !rightEar || !nNose || !nLEar || !nREar) return;

        let pHeadCenter: THREE.Vector3;
        let headSize: number;

        if (this.mode === 'centroid') {
            const pLEar = new THREE.Vector3(leftEar.x, -leftEar.y, -leftEar.z);
            const pREar = new THREE.Vector3(rightEar.x, -rightEar.y, -rightEar.z);
            const pNose = new THREE.Vector3(nose.x, -nose.y, -nose.z);

            // Midpoint between ears
            pHeadCenter = new THREE.Vector3().addVectors(pLEar, pREar).multiplyScalar(0.5);

            // Slightly shift towards nose to avoid being too far back
            const toNose = new THREE.Vector3().subVectors(pNose, pHeadCenter).multiplyScalar(0.3);
            pHeadCenter.add(toNose);

            if (this.mirrored) pHeadCenter.x *= -1;
            pHeadCenter.applyEuler(euler).multiplyScalar(this.scaleFactor).add(offset);

            headSize = pLEar.distanceTo(pREar) * 1.5 * this.scaleFactor * this.headScale;
        } else {
            const xL = this.mirrored ? (0.5 - nLEar.x) : (nLEar.x - 0.5);
            const xR = this.mirrored ? (0.5 - nREar.x) : (nREar.x - 0.5);
            const xN = this.mirrored ? (0.5 - nNose.x) : (nNose.x - 0.5);

            const pLEar = new THREE.Vector3(xL * width, (0.5 - nLEar.y) * height + 1.5, -leftEar.z * this.scaleFactor + this.directDepthOffset);
            const pREar = new THREE.Vector3(xR * width, (0.5 - nREar.y) * height + 1.5, -rightEar.z * this.scaleFactor + this.directDepthOffset);
            const pNose = new THREE.Vector3(xN * width, (0.5 - nNose.y) * height + 1.5, -nose.z * this.scaleFactor + this.directDepthOffset);

            pHeadCenter = new THREE.Vector3().addVectors(pLEar, pREar).multiplyScalar(0.5);
            const toNose = new THREE.Vector3().subVectors(pNose, pHeadCenter).multiplyScalar(0.3);
            pHeadCenter.add(toNose);

            headSize = pLEar.distanceTo(pREar) * 1.8 * this.headScale * this.scaleFactor;
        }

        this.headBox.position.copy(pHeadCenter);
        this.headBox.scale.set(headSize, headSize, headSize);
        this.headBox.visible = true;
        this.headBox.visible = true;
    }
}
