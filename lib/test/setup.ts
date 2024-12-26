import { expect } from "vitest";
import { fixture as mfixture, html as mhtml } from "@open-wc/testing";
import matchers from "@testing-library/jest-dom/matchers";

// Add custom matchers
expect.extend(matchers);

declare global {
  var fixture: typeof mfixture;
  var html: typeof mhtml;
}

globalThis.fixture = fixture;
globalThis.html = html;
