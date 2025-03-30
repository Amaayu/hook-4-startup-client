import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        id: "/", // ✅ Add this here
        name: "My Awesome App",
        short_name: "H4S",
        description: "My Awesome App description",
        theme_color: "#ffffff",
        start_url: "/", // ✅ Important for PWA
        display: "standalone",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  server: {
    host: "0.0.0.0", // ✅ Docker ke liye ye set karo
    port: 3000, // ✅ Port wahi rakhna
  },
  preview: {
    port: 3000, // ✅ Preview ke liye bhi same port
    host: "0.0.0.0", // ✅ Docker me accessibl
    allowedHosts: ["hook4startup-client.onrender.com"],
  },
});
