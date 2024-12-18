export interface ButtonProps {
  primary: boolean;
  backgroundColor?: string | null;
  size: string;
  label: string;
  onClick: (event: MouseEvent) => void;
}
