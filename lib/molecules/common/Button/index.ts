import { CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { ButtonStyles } from "@molecules/common/Button/button.style";
import {
  ButtonProps,
  ButtonRounded,
  ButtonSize,
  ButtonTheme,
  ButtonVariant,
} from "@molecules/common/Button/button.types";
import { constructCSSClass } from "@/utils/css";

@customElement("mugi-button")
export class Button extends LitElement implements ButtonProps {
  static styles: CSSResultGroup = [ButtonStyles];

  @property({ type: String }) size: ButtonSize = "md";
  @property({ type: String }) label = "Button";
  @property({ type: Boolean, reflect: true }) xStretch = false;
  @property({ type: Boolean, reflect: true }) yStretch = false;
  @property({ type: String, reflect: true }) theme: ButtonTheme = "light";
  @property({ type: String, attribute: "background-color" })
  backgroundColor?: string;
  @property({ type: String, reflect: true }) variant: ButtonVariant = "filled";
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) rounded: ButtonRounded = "none";

  render() {
    const classes = {
      ["mugi-button"]: true,
      [`mugi-button--${this.size}`]: true,
      [`mugi-button--${this.theme}`]: true,
      [`mugi-button--${this.variant}`]: true,
      [`mugi-button--rounded-${this.rounded}`]: this.rounded !== "none",
      "mugi-button--x-stretch": this.xStretch,
      "mugi-button--y-stretch": this.yStretch,
      "mugi-button--disabled": this.disabled,
    };

    const styles = {
      ...(this.backgroundColor && { backgroundColor: this.backgroundColor }),
    };

    return html`
      <button
        type="button"
        class=${constructCSSClass(classes)}
        style=${styleMap(styles)}
        ?disabled=${this.disabled}
      >
        <slot>${this.label}</slot>
      </button>
    `;
  }
}
