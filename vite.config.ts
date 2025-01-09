import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import vue from "@vitejs/plugin-vue";
import devServer from "@hono/vite-dev-server";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  build: {
    outDir: "dist/static",
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    devServer({
      entry: "src/main.dev.ts",
      exclude: [/^(?!\/(api|openapi)).*/],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
