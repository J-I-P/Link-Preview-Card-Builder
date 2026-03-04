import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base URL for GitHub Pages deployment
  base: '/Link-Preview-Card-Builder/',

  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2020',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['html2canvas']
        }
      }
    },
    // Optimize for GitHub Pages performance
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096
  },

  // Development server
  server: {
    port: 5173,
    open: true,
    cors: true,
    host: true
  },

  // Preview server (for testing production builds)
  preview: {
    port: 4173,
    open: true,
    host: true
  },

  // Path resolution
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/services': resolve(__dirname, './src/services'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/types': resolve(__dirname, './src/types'),
      '@/styles': resolve(__dirname, './src/styles'),
      '@/assets': resolve(__dirname, './src/assets')
    }
  },

  // CSS configuration
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true
  },

  // Optimization
  esbuild: {
    drop: ['console', 'debugger']
  },

  // Plugin configuration
  plugins: [],

  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
});