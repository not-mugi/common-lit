/** @type {import('vite').UserConfig} */

import { resolve } from "path";

export default {
  resolve: {
    alias: {
      "@": resolve(__dirname, "lib"),
      "@components": resolve(__dirname, "lib/components"),
    },
  },
  build: {
    lib: {
      entry: [resolve(__dirname, "lib/main.ts")],
      name: "mugi-web-components",
      fileName: (format: string) => `mugi-web-components.${format}.js`,
      cssFileName: "mugi-web-components",
    },
  },
};
