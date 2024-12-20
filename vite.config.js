import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Directorio de salida para los archivos compilados
  },
  server: {
    port: 3000, // Puedes configurar el puerto si es necesario
  },
});
