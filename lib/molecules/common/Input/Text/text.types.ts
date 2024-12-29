import { Size } from "@/utils";

export type TextInputSize = Size;
export type TextInputStretch = "x-stretch" | "y-stretch" | "stretch" | "none";

export type TextInputProps = {
  size: TextInputSize;
  value: string | number;
  stretch: TextInputStretch;
  disabled: boolean;
  placeholder: string;
};
