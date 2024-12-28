import { Size } from "@/utils";

export type FlexGap = Size | "none";
export type FlexJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type FlexAlign =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

export type FlexProps = {
  gap: FlexGap;
  justify: FlexJustify;
  align: FlexAlign;
  overlay: boolean;
};

declare global {
  interface HTMLElementTagNameMap {
    "mugi-flex": FlexProps;
  }
}
