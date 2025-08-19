import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/EMAIL-DASH-19-08-25/',   // 👈 EXACT repo name
})
