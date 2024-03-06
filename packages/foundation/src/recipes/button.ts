import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
  className: "button",
  base: {
    p: 4,
    backgroundColor: "accent.emphasized",
    color: "success.500",
  },
});
