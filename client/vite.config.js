import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    flowbiteReact(),
    nodePolyfills({
      // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      include: ["fs"],
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // 👈 no /api here
        changeOrigin: true,
        // no rewrite: keep /api prefix so it hits /api/v1/test on the backend
      },
    },
  },
});
