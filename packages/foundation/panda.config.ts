import { defineConfig } from "@pandacss/dev";
import { preset } from "@pandacss/preset-panda";

import { globalCss } from "./src/globals";
import { animations } from "./src/tokens/animation";
import { colors } from "./src/tokens/colors";

import { semanticColors } from "./src/semantic-tokens/colors";

import * as recipes from "./src/recipes";

// using for panda studio
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalCss,

  theme: {
    tokens: {
      ...preset.theme.tokens,
      animations,
      colors,
    },
    semanticTokens: {
      colors: semanticColors,
    },
    recipes,
  },

  // The output directory for your css system
  outdir: "styled-system",
});
