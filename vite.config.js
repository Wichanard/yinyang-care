import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/yinyang-care/',
  plugins: [react()],
  server: {
    host: true, // Listen on all IP addresses
    cors: true, // Allow cross-origin requests
    allowedHosts: true // Allow localtunnel host limits (Vite 5 handles this config to allow ngrok/localtunnel)
  }
})
