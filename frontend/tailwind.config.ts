import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': "#202430",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
