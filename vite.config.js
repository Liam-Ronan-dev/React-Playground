import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// API & frontend to run on same server to avoid configuring CORS - learning purposes
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
