import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Assurez-vous que les fichiers CSS sont correctement gérés
    preprocessorOptions: {
      css: {
        // options CSS, si nécessaires
      },
    },
  },
});
