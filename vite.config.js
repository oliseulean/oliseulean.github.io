import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const { npm_package_name: appName, npm_package_version: appVersion } = process.env;

export default defineConfig({
  server: {
    port: 5000,
    host: true,
  },
  base: '/',
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
        // import global scss styles/variables
        additionalData: '@import "@/assets/styles/base.scss";',
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
  test: {
    environment: 'happy-dom',
    coverage: {
      // enable all when having more tests
      // all: true,
    },
  },
});
