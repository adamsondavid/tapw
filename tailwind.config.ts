import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/client/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
        mono: ["'JetBrains Mono Variable'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
} satisfies Config;
