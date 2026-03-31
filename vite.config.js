import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ict2233-ca-02-supunpriyanath333/', // <-- add this line
})
