/// <reference types="vitest" />

import { defineConfig } from 'vite'
// import replace from '@rollup/plugin-replace'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ]
})
