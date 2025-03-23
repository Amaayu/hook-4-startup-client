import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
