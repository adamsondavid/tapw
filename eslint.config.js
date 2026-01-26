import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginCypress from "eslint-plugin-cypress/flat";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  includeIgnoreFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".gitignore")),
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { parser: tsEslint.parser },
    },
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  pluginCypress.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "vue/multi-word-component-names": "off",
    },
  },
  eslintConfigPrettier,
]);
