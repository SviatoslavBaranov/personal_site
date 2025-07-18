import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://mxcvserver.duckdns.org',
  //       changeOrigin: true,
  //       secure: false, 
  //     },
  //   },
  // }
})