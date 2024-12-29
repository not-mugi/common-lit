import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TextStyles } from "@molecules/common/Input/Text/text.style";
import {
  TextInputProps,
  TextInputSize,
  TextInputStretch,
} from "@molecules/common/Input/Text/text.types";
import { constructCSSClass } from "@/utils/css";

@customElement("mugi-text-input")
export class TextInput extends LitElement implements TextInputProps {
  @property({ type: String }) size: TextInputSize = "md";
  @property({ type: String }) value = "";
  @property({ type: String }) placeholder = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) stretch: TextInputStretch = "none";

  static styles = [TextStyles];

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("size")) {
      this.style.setProperty(
        "--input-font-size",
        `var(--${this.size}-font-size)`
      );
      this.style.setProperty("--input-padding", `var(--${this.size}-input-pd)`);
    }
  }

  render() {
    const classes = {
      "mugi-text-input": true,
      [`mugi-text-input--${this.size}`]: true,
      [`mugi-text-input--${this.stretch}`]: this.stretch !== "none",
    };

    return html`
      <input
        class=${constructCSSClass(classes)}
        .value=${this.value}
        .placeholder=${this.placeholder}
        ?disabled=${this.disabled}
      />
    `;
  }
}
