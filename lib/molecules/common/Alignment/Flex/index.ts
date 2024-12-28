import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FlexStyles } from "@/molecules/common/Alignment/Flex/flex.style";
import { FlexAlign, FlexGap, FlexJustify, FlexProps } from "./flex.types";

@customElement("mugi-flex")
export class Flex extends LitElement implements FlexProps {
  @property({ type: Boolean }) overlay = false;
  @property({ type: String }) gap: FlexGap = "none";
  @property({ type: String }) justify: FlexJustify = "flex-start";
  @property({ type: String }) align: FlexAlign = "flex-start";

  static styles = [FlexStyles];

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("justify")) {
      this.style.setProperty("--justify-content", this.justify);
    }
    if (changedProperties.has("align")) {
      this.style.setProperty("--align-items", this.align);
    }
    if (changedProperties.has("gap")) {
      this.style.setProperty("--gap", `var(--gap-${this.gap})`);
    }

    if (changedProperties.has("overlay")) {
      this.style.setProperty("--width", this.overlay ? "100%" : "auto");
      this.style.setProperty("--height", this.overlay ? "100%" : "auto");
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}
