import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import vue from "@vitejs/plugin-vue";
import devServer from "@hono/vite-dev-server";

export default defineConfig({
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
  build: {
    outDir: "dist/static",
  },
});
