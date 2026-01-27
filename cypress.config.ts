import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    experimentalStudio: true,
    baseUrl: "http://localhost:3000",
  },
});
