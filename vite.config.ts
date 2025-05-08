import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/recipes-app-git/",
  build: {
    outDir: "dist",  // Ensure the build is output into the 'dist' directory
    assetsDir: "assets",  // Optionally, specify the assets directory
  },
});
