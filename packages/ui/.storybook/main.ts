import { dirname, join } from "path";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import type { StorybookConfig } from "@storybook/react-vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    // @ts-ignore
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: "./" })],
    });
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
