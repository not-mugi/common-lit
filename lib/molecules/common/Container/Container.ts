import { ComponentDimensions } from "@/utils";
import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";

type ContainerProps = {
  width: ComponentDimensions | "full";
};

@customElement("mugi-container")
export class Container extends LitElement implements ContainerProps {
  @property({ type: String }) width: ComponentDimensions = "xl";
  @property({ type: String }) height = "auto";
  @property({ type: String }) border = "none";
  @property({ type: String }) radius = "none";
  @property({ type: String }) theme = "light";
  @property({ type: Number }) zIndex = 1;

  static styles = css`
    .container {
      width: var(--container-width, auto);
      height: var(--container-height, auto);
      border: var(--container-border, none);
      background-color: var(--container-background-color, blue);
      z-index: var(--container-z-index, 1);
    }
  `;

  render() {
    return html`<div class="container"><slot></slot></div>`;
  }
}
