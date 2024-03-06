import { defineTokens } from "@pandacss/dev";

export const animations = defineTokens.animations({
  "fade-in": {
    value: "fade-in 400ms {easings.emphasized-in}",
  },
});
