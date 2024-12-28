import { LitElement, html, CSSResultGroup } from "lit";
import { property, customElement } from "lit/decorators.js";
import { Theme } from "@/utils";
import { constructCSSClass } from "@/utils/css";
import { ContainerStyles } from "@molecules/common/Container/container.style";
import {
  BorderColor,
  BorderRadius,
  BorderWidth,
  ContainerProps,
  ContainerSize,
} from "@molecules/common/Container/container.types";

@customElement("mugi-container")
export class Container extends LitElement implements ContainerProps {
  static styles: CSSResultGroup = [ContainerStyles];

  @property({ type: String }) theme: Theme = "light";
  @property({ type: String }) size: ContainerSize = "sm";
  @property({ type: String }) borderWidth: BorderWidth = "none";
  @property({ type: String }) borderColor: BorderColor = "none";
  @property({ type: String }) borderRadius: BorderRadius = "none";
  @property({ type: String }) borderTopLeftRadius: BorderRadius = "none";
  @property({ type: String }) borderTopRightRadius: BorderRadius = "none";
  @property({ type: String }) borderBottomLeftRadius: BorderRadius = "none";
  @property({ type: String }) borderBottomRightRadius: BorderRadius = "none";

  render() {
    const classes = {
      ["mugi-container"]: true,
      [`mugi-container--${this.theme}`]: true,
      [`mugi-container--${this.size}`]: true,
      [`mugi-container-border--${this.borderColor}--${this.borderWidth}`]:
        this.borderWidth !== "none",
      [`mugi-container-border-radius--${this.borderRadius}`]:
        this.borderRadius !== "none",
      [`mugi-container-border-top-left-radius--${this.borderTopLeftRadius}`]:
        this.borderTopLeftRadius !== "none",
      [`mugi-container-border-top-right-radius--${this.borderTopRightRadius}`]:
        this.borderTopRightRadius !== "none",
      [`mugi-container-border-bottom-left-radius--${this.borderBottomLeftRadius}`]:
        this.borderBottomLeftRadius !== "none",
      [`mugi-container-border-bottom-right-radius--${this.borderBottomRightRadius}`]:
        this.borderBottomRightRadius !== "none",
    };

    return html`<div class=${constructCSSClass(classes)}><slot></slot></div>`;
  }
}
