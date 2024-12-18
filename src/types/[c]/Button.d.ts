export interface ButtonProps {
  stretch: boolean;
  size: string;
  label: string;
  theme: ButtonTheme;
  backgroundColor?: string | null;
  onClick: (event: MouseEvent) => void;
}

export type ButtonTheme = "light" | "dark" | "mugi";
