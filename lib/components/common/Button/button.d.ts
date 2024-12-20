export interface ButtonProps {
  buttonSize: ButtonSize,
  buttonLabel: string,
  buttonStretch: boolean,
  buttonTheme: ButtonTheme,
  buttonBackgroundColor?: string
  buttonOnClick: ButtonFunction,
}

export type ButtonFunction = (event: MouseEvent) => void
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonTheme = "light" | "dark" | "mugi";

declare global {
  interface HTMLElementTagNameMap {
    'lit-button': ButtonProps;
  }
}