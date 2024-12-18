import path from "path";

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "../src"),
          },
          {
            find: "@web",
            replacement: path.resolve(__dirname, "../src/web"),
          },
          {
            find: "@common",
            replacement: path.resolve(__dirname, "../src/common"),
          },
          {
            find: "@stories",
            replacement: path.resolve(__dirname, "../src/stories"),
          },
        ],
      },
    };
  },
};
export default config;
