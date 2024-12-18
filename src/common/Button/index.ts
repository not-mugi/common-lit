import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { ButtonProps } from "@/types/[component]/Button";

import "@common/Button/Button.scss";

export const Button = ({
  primary,
  size,
  label,
  onClick,
  backgroundColor = null,
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return html`
    <button
      type="button"
      class=${[
        "storybook-button",
        `storybook-button--${size || "medium"}`,
        mode,
      ].join(" ")}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
