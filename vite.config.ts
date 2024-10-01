import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import { globSync } from 'glob'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const assetsDir = '_bundle'

export default defineConfig({
  appType: 'mpa',
  root: path.resolve(__dirname, 'src', 'pages'),
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, 'dist'),
    assetsDir: assetsDir,
    rollupOptions: {
      input: globSync(path.resolve(__dirname, 'src', 'pages', '*.html')),
      output: {
        assetFileNames: (_assetInfo) => {
          return `${assetsDir}/[name]-[hash][extname]`
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  plugins: [react()],
})
