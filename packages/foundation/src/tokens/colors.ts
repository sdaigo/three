import { defineTokens } from "@pandacss/dev";

export const colors = defineTokens.colors({
  primary: {
    description: "brand color",
    value: "#D71C1C",
  },
  black: {
    value: "#0C0D0D",
  },
  white: {
    value: "#fff",
  },
  ultra: {
    950: { value: "#0C0D0D" },
    900: { value: "#191A1A" },
    800: { value: "#323334" },
    700: { value: "#4B4D4E" },
    600: { value: "#646668" },
    500: { value: "#7D8082" },
    400: { value: "#97999B" },
    300: { value: "#B1B2B4" },
    200: { value: "#CBCCCD" },
    100: { value: "#E5E6E6" },
    50: { value: "#F4F4F6" },
  },
  info: {
    700: { value: "#1d4ed8" },
    500: { value: "#3b82f6" },
    300: { value: "#93c5fd" },
    50: { value: "#eff6ff" },
  },
  success: {
    700: { value: "#1F7A4D" },
    500: { value: "#33CC80" },
    300: { value: "#85E0B3" },
    50: { value: "#EBFAF3" },
  },
  error: {
    700: { value: "#910808" },
    500: { value: "#F20D0D" },
    300: { value: "#F76E6E" },
    50: { value: "#FEE6E6" },
  },
});
