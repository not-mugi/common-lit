import { LitElement, html } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import { constructCSSClass } from "@/utils/css";
import { BoundaryStyles } from "@molecules/common/Boundary/boundary.style";
import {
  BoundaryBorderRadius,
  BoundaryProps,
  BoundarySize,
  BoundaryTheme,
} from "@molecules/common/Boundary/boundary.types";

@customElement("mugi-boundary")
export class Boundary extends LitElement implements BoundaryProps {
  @property({ type: String }) width?: string;
  @property({ type: String }) height?: string;
  @property({ type: String }) size: BoundarySize = "none";
  @property({ type: String }) theme: BoundaryTheme = "none";
  @property({ type: String }) border = "none";
  @property({ type: String }) background = "transparent";
  @property({ type: String }) color = "inherit";
  @property({ type: String }) padding = "0";
  @property({ type: String }) margin = "0";
  @property({ type: String }) display = "inline-block";
  @property({ type: String }) rounded: BoundaryBorderRadius = "none";

  static styles = [BoundaryStyles];

  render() {
    const classes = {
      "mugi-boundary": true,
      [`mugi-boundary--${this.size}`]:
        !this.width && !this.height && this.size !== "none",
      [`mugi-boundary-b-radius--${this.rounded}`]: this.rounded !== "none",
      [`mugi-boundary--${this.theme}`]: this.theme !== "none",
    };
    return html`
      <span
        class=${constructCSSClass(classes)}
        style="
                    --border: ${this.border};
                    --background: ${this.background};
                    --color: ${this.color};
                    --padding: ${this.padding};
                    --margin: ${this.margin};
                    --display: ${this.display};
                "
      >
        <slot></slot>
      </span>
    `;
  }
}
