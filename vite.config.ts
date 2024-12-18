/** @type {import('vite').UserConfig} */

import { resolve } from "path";

export default {
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@web": resolve(__dirname, "src/web"),
      "@common": resolve(__dirname, "src/common"),
      "@stories": resolve(__dirname, "src/stories"),
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "mugi-web-components",
      fileName: (format: string) => `mugi-web-components.${format}.js`,
    },
  },
};
