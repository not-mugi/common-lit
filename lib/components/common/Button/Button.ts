import { CSSResultGroup, html, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { customElement, property } from "lit/decorators.js";
import { ButtonStyles } from "@components/common/Button/button.styles";
import { ButtonProps, ButtonSize, ButtonTheme } from "@components/common/Button/Button.d";

@customElement('lit-button')
export class Button extends LitElement {

  static styles: CSSResultGroup = [
    ButtonStyles
  ];

  @property({ type : String })
  buttonSize : ButtonSize = 'md';

  @property({ type : String })
  buttonLabel : string = 'Button';

  @property({ type : Boolean })
  buttonStretch : boolean = false;

  @property({ type : String })
  buttonTheme : ButtonTheme = 'light';

  @property({ type : String })
  buttonBackgroundColor : string = "";

  @property({ type : Function })
  buttonOnClick : () => void = () => {};

  // Render the UI as a function of component state
  render() {
    return RenderButton({
      buttonSize: this.buttonSize,
      buttonLabel: this.buttonLabel,
      buttonStretch: this.buttonStretch,
      buttonTheme: this.buttonTheme,
      buttonOnClick: this.buttonOnClick,
      buttonBackgroundColor: this.buttonBackgroundColor
    });
  }
}

export function RenderButton({
  buttonSize,
  buttonTheme,
  buttonLabel,
  buttonStretch,
  buttonBackgroundColor,
  buttonOnClick = () => {},
}: ButtonProps) {
  return html`
    <button
      type="button"
      class=${[
        "common-button",
        `common-button--${buttonTheme || "light"}`,
        `common-button--${buttonSize || "md"}`,
        `${buttonStretch ? "common-button--stretch" : ""}`,
      ].join(" ")}
      style=${styleMap({ backgroundcolor : buttonBackgroundColor || "" })}
      @click=${buttonOnClick}
    >
      ${buttonLabel}
    </button>
  `;
}