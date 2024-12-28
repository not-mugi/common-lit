import { Size, Theme } from "@utils/types";

export type ButtonSize = Size;
export type ButtonRounded = Size | "none";
export type ButtonTheme = Theme;
export type ButtonVariant = "filled" | "outlined" | "text";

export interface ButtonProps {
  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * The text content of the button
   * @default 'Button'
   */
  label: string;

  /**
   * Whether the button should stretch horizontally
   * @default false
   */
  xStretch?: boolean;

  /**
   * Whether the button should stretch vertically
   * @default false
   */
  yStretch?: boolean;

  /**
   * The theme of the button
   * @default 'light'
   */
  theme?: ButtonTheme;

  /**
   * Custom background color
   */
  backgroundColor?: string;

  /**
   * The variant of the button
   * @default 'filled'
   */
  variant?: ButtonVariant;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Button border radius
   * @default "none"
   */
  rounded?: ButtonRounded;

  /**
   * Click event handler
   */
  onClick: (e: MouseEvent) => void;
}
/**
 * Custom event type for button click events
 */
export type ButtonClickCallback = (e: MouseEvent) => void;

declare global {
  interface HTMLElementTagNameMap {
    "mugi-button": ButtonProps;
  }
}
