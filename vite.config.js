import { defineConfig } from 'vite'

export default defineConfig({
  entry: 'src/main.js',
  optimizeDeps: {
    include: ['jquery', 'jquery-ui'],
  },
  build: {
    outDir: 'dist',
  },
  plugins: [
    {
      name: 'vite-plugin-jquery',
      apply: 'build',
      jQuery: true,
    },
  ],

  resolve: {
    alias: {
      $: 'jQuery',
    },
  },

  server: {
    port: 3000,
    open: true,
  },
})
