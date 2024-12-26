import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    environment: "happy-dom",
    include: ["lib/**/__tests__/**/*.[jt]s?(x)"],
    coverage: {
      reporter: ["text", "lcov"],
      exclude: ["node_modules/"],
    },
    setupFiles: ["./lib/test/setup.ts"],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
      "@molecules": resolve(__dirname, "./lib/molecules"),
      "@organisms": resolve(__dirname, "./lib/organisms"),
      "@utils": resolve(__dirname, "./lib/utils"),
    },
  },
});
