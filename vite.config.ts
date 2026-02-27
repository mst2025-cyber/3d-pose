import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        // Avoid Vite's optimization for MediaPipe because it uses WASM and internal workers that don't play well with pre-bundling
        exclude: ['@mediapipe/tasks-vision']
    },
    server: {
        host: true
    }
});
