import { Size, Theme } from "@/utils";

export type BoundarySize =
  | Size
  | "auto"
  | "stretch"
  | "fit-content"
  | "max-content"
  | "min-content"
  | "none";
export type BoundaryTheme = "none" | Theme;
export type BoundaryBorderRadius = "none" | "rounded" | "circle" | Size;

export type BoundaryProps = {
  width?: string;
  height?: string;
  size: BoundarySize;
  theme: BoundaryTheme;
  border: string;
  background: string;
  color: string;
  padding: string;
  margin: string;
  display: string;
  rounded: BoundaryBorderRadius;
};

declare global {
  interface HTMLElementTagNameMap {
    "mugi-boundary": BoundaryProps;
  }
}
