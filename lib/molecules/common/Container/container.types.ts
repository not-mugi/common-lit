import { Size, Theme } from "@/utils";

export type ContainerSize = Size | "full" | "screen";
export type BorderWidth = Size | "none";
export type BorderRadius = Size | "none";
export type BorderColor = Theme | "none";

export type ContainerProps = {
  theme: Theme;
  size: ContainerSize;
  borderWidth: BorderWidth;
  borderColor: BorderColor;
  borderRadius: BorderRadius;
  borderTopLeftRadius: BorderRadius;
  borderTopRightRadius: BorderRadius;
  borderBottomLeftRadius: BorderRadius;
  borderBottomRightRadius: BorderRadius;
};

declare global {
  interface HTMLElementTagNameMap {
    "mugi-container": ContainerProps;
  }
}
