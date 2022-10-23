import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./dist",
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@contracts": path.resolve(__dirname, "./build/contracts"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
