import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 👇 TAMBAHKAN INI:
  server: {
    host: true, // Mengizinkan akses dari IP network
    port: 5173, // (Opsional) Mengunci port biar gak gonta-ganti
  }
})