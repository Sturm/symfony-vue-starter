import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    symfonyPlugin(),
    vue(),
    eslint(),
  ],
  build: {
    rollupOptions: {
      input: {
        app: "./assets/app.js"
      },
    }
  },
});
