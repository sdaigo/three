import { defineSemanticTokens } from "@pandacss/dev";

export const semanticColors = defineSemanticTokens.colors({
  accent: {
    DEFAULT: { value: "{colors.ultra.950}" },
    fg: { value: "{colors.ultra.50}" },
    emphasized: { value: "{colors.ultra.800}" },
    muted: { value: "{colors.ultra.700}" },
    subtle: { value: "{colors.ultra.200}" },
    disabled: { value: "{colors.ultra.100}" },
  },
  foreground: {
    DEFAULT: { value: "{colors.ultra.950}" },
    emphasized: { value: "{colors.ultra.800}" },
    muted: { value: "{colors.ultra.700}" },
    subtle: { value: "{colors.ultra.500}" },
    disabled: { value: "{colors.ultra.200}" },
  },
  background: {
    DEFAULT: { value: "{colors.white}" },
    subtle: { value: "{colors.ultra.100}" },
    muted: { value: "{colors.ultra.200}" },
    disabled: { value: "{colors.ultra.200}" },
  },
  link: {
    DEFAULT: { value: "{colors.info.500}" },
    hover: { value: "{colors.info.700}" },
  },
});
