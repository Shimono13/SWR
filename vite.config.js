import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Puoi cambiare il numero di porta qui
  },
  plugins: [react()],
});
