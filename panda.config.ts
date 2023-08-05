import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
