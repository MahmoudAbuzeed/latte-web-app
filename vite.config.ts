import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// On GitHub Pages the site is served from /<repo>/, so the production build
// needs that base path. Local dev stays at "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/latte-web-app/" : "/",
  plugins: [react()],
}));
