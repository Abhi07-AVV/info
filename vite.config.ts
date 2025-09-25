import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: command === 'build' ? '/info/' : '/', 
    server: {
      host: "0.0.0.0",
      port: process.env.PORT || 10000,
      allowedHosts: ["*"],
    },
    preview: {
      host: '0.0.0.0', 
      port: 10000,
    }
  }
})


