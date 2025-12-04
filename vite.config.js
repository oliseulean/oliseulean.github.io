/* Imports */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import {
  name as appName,
  version as appVersion,
} from './package.json';

export default defineConfig({
  base: '/',
  server: {
    port: 5000,
    host: true,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.json', '.vue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/base.scss' as *;
        `,
      },
    },
  },
  build: {
    minify: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: `${appName}-v${appVersion}.js`,
        chunkFileNames: `${appName}-v${appVersion}.js`,
        assetFileNames: `${appName}-v${appVersion}.[ext]`,
        manualChunks: undefined,
      },
    },
  },
});
