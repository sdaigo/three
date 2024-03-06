import { definePreset } from "@pandacss/dev";

import { globalCss } from "./globals";
import { animations } from "./tokens/animation";
import { colors } from "./tokens/colors";

import { semanticColors } from "./semantic-tokens/colors";

import { recipes } from "./recipes";

const preset = definePreset({
  globalCss,
  theme: {
    extend: {
      tokens: {
        animations,
        colors,
      },
      semanticTokens: {
        colors: semanticColors,
      },
      recipes,
    },
  },
});

export default preset;
