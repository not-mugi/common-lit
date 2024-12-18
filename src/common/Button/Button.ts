import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { ButtonProps } from "@/types/[c]/Button";

import "@common/Button/button.scss";

export const Button = ({
  size,
  label,
  stretch,
  onClick,
  theme = "light",
  backgroundColor = null,
}: ButtonProps) => {
  return html`
    <button
      type="button"
      class=${[
        "common-button",
        `common-button--${theme}`,
        `common-button--${size || "medium"}`,
        `${stretch ? "common-button--stretch" : ""}`,
      ].join(" ")}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
