/** @type {import('vite').UserConfig} */

import { resolve } from "path";

interface AliasOptions {
  [key: string]: string;
}

interface ResolveOptions {
  alias: AliasOptions;
}

interface LibOptions {
  entry: string;
  name: string;
  fileName: (format: string) => string;
}

interface BuildOptions {
  lib: LibOptions;
}

interface ViteConfig {
  resolve: ResolveOptions;
  build: BuildOptions;
}

const config: ViteConfig = {
  resolve: {
    alias: {
      "@web": resolve(__dirname, "src/web"),
      "@styles": resolve(__dirname, "src/styles"),
      "@stories": resolve(__dirname, "src/stories"),
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MugiWebComponents",
      fileName: (format) => `mugi-web-components.${format}.js`,
    },
  },
};

export default config;
