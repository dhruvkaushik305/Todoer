import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target:
  //         process.env.NODE_ENV === "development"
  //           ? "http://localhost:3000"
  //           : "https://todoer-backend-new.onrender.com",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
