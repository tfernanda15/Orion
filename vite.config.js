import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Orion/', // <--- ¡CAMBIA ESTA LÍNEA A TU NOMBRE EXACTO DEL REPOSITORIO!
});