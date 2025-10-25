import { defineConfig } from 'vite';

export default defineConfig({

  build: {
    lib: {
      entry: 'src.js',
      fileName: 'vite',
      formats: ['es'],
    },
  }
});
