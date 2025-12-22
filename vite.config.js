import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Optimize React rendering
      jsxRuntime: 'automatic',
      babel: {
        plugins: [],
      },
    }),
  ],
  build: {
    // Performance optimization
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Reduce bundle size
    sourcemap: false,
    cssCodeSplit: true,
  },
  server: {
    // Fast refresh for development
    middlewareMode: false,
  },
})
