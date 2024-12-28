import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mugi-text-input")
export class MugiTextInput extends LitElement {
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: String }) placeholder = "";
  @property({ type: Boolean }) disabled = false;

  static styles = [
    // sharedStyles,
    css`
      input {
        padding: 8px;
        font-size: 1rem;
        border: 1px solid var(--border-color, #ccc);
        border-radius: 4px;
        background-color: var(--input-bg, white);
      }
      input:focus {
        outline: none;
        border-color: var(--focus-color, #0078d4);
      }
      input[disabled] {
        background-color: var(--disabled-bg, #f0f0f0);
        cursor: not-allowed;
      }
    `,
  ];

  render() {
    return html`
      <label>
        <span>${this.label}</span>
        <input
          .value=${this.value}
          .placeholder=${this.placeholder}
          ?disabled=${this.disabled}
        />
      </label>
    `;
  }
}
