import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "MugiWebComponents",
      fileName: (format) =>
        `mugi-web-components.${format === "es" ? "es" : "umd"}.${
          format === "es" ? "js" : "cjs"
        }`,
      formats: ["es", "umd"],
    },
    sourcemap: true,
  },
  esbuild: {
    target: "es2017",
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ["lib/**/*"],
      exclude: ["**/__tests__/**", "**/*.test.*", "**/test/**"],
      outDir: "dist/types",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
      "@molecules": resolve(__dirname, "./lib/molecules"),
      "@organisms": resolve(__dirname, "./lib/organisms"),
      "@utils": resolve(__dirname, "./lib/utils"),
    },
  },
});
