import { defineConfig } from "@pandacss/dev";

import preset from "@three/foundation";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [preset],

  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.stories.{js,jsx,ts,tsx}"],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
  staticCss: {
    recipes: "*",
  },
});
