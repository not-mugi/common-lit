import { describe, expect, it } from "vitest";
import { ButtonProps } from "@molecules/common/Button/button.types";
import { Button } from "@/molecules/common/Button";
import { fixture, html } from "@open-wc/testing";

describe("Backward Compatibility", () => {
  describe("Button Component", () => {
    it("should support legacy theme prop", async () => {
      const button = await fixture<Button>(
        html`<mugi-button theme="light"></mugi-button>`
      );
      expect(button.theme).toBe("light");
    });

    it("should handle deprecated onClick prop", async () => {
      const button = await fixture<Button>(
        html`<mugi-button @click=${() => {}}></mugi-button>`
      );
      expect(button).toBeTruthy();
    });

    it("should maintain older size values", async () => {
      const sizes: ButtonProps["size"][] = ["sm", "md", "lg"];
      for (const size of sizes) {
        const button = await fixture<Button>(
          html`<mugi-button size=${size}></mugi-button>`
        );
        expect(button.size).toBe(size);
      }
    });
  });
});
