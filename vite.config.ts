import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve, join } from 'node:path'
import { globSync } from 'glob'

const ASSETS_DIR = '_bundle'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: ASSETS_DIR,
    emptyOutDir: true,
    outDir: join(__dirname, "dist"),
    rollupOptions: {
      input: globSync(resolve(__dirname, "src", "*.html")),
      output: {
        assetFileNames: (_assetInfo) => {
          return `${ASSETS_DIR}/[name]-[hash][extname]`
        }
      }
    },
  },
  plugins: [react()],
  publicDir: resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  root: 'src',
})
