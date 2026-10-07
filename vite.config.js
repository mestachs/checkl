import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/checkl/",
  plugins: [react()],
  build: { outDir: "build" },
});
