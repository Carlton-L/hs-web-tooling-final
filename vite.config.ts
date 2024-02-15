import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  base: "/hs-web-toolng-final/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup",
  },
  server: {
    // proxy: {
    //   '/api/insult': {
    //     target: 'https://insult.mattbas.org/api/insult', // The URL of the external API
    //     changeOrigin: true, // Needed for virtual hosted sites
    //     rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api from the path
    //   },
    // },
  },
}));
