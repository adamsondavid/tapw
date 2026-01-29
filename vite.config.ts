import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { nitro } from "nitro/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [tailwindcss(), vue(), nitro()],
  nitro: {
    sourcemap: true,
    serverEntry: "src/server/main.ts",
    compatibilityDate: "2026-01-27",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
    vercel: {
      functions: {
        runtime: "bun1.x",
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
