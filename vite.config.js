import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows the app to be accessed by any device on your network
    port: 5173,       // You can change the port if needed
  },
})
