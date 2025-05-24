import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM-sätt att få __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint()
  ],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
    },
  },
});
