import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Project site: https://<user>.github.io/countryCapitals/
export default defineConfig({
  base: '/countryCapitals/',
  plugins: [react()],
})
