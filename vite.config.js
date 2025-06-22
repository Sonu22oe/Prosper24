import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: "/Prosper-Tech/", 
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      overlay: false,
      host: "aa7ce8df-7015-459f-a3a7-2747041cf361-00-3s4rowriugsly.sisko.replit.dev"
    }
  }
})
