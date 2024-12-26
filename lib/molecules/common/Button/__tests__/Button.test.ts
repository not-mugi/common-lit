import { describe, expect, it, vi } from "vitest";
import { Button } from "@molecules/common/Button/Button";
import { ComponentValidationError } from "@utils/validation";
import { fixture, html } from "@open-wc/testing";

describe("Button Component", () => {
  it("should render with default props", async () => {
    const button = await fixture<Button>(html`<lm-button></lm-button>`);
    expect(button.size).toBe("md");
    expect(button.theme).toBe("light");
    expect(button.variant).toBe("filled");
  });

  it("should emit button-click event when clicked", async () => {
    const onClick = vi.fn();
    const button = await fixture<Button>(
      html`<lm-button @button-click=${onClick}></lm-button>`
    );
    button.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should not emit event when disabled", async () => {
    const onClick = vi.fn();
    const button = await fixture<Button>(
      html`<lm-button disabled @button-click=${onClick}></lm-button>`
    );
    button.click();
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should throw validation error for invalid size", async () => {
    expect(() => {
      // @ts-expect-error - Testing invalid size
      const button = new LMButton();
      button.size = "invalid";
    }).toThrow(ComponentValidationError);
  });
});
