import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import devServer from "@hono/vite-dev-server";

export default defineConfig({
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
