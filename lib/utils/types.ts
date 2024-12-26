/**
 * Utility type for CSS custom properties
 */
export type CSSCustomProperty = `--${string}`;

/**
 * Type helper for component properties that support CSS variables
 */
export type CSSVarProperties<T extends string> = {
  [K in T]: string | CSSCustomProperty;
};

/**
 * Type helper for component event handlers
 */
export type EventCallback<T = Event> = (event: T) => void;

/**
 * Type helper for component sizes
 */
export type ComponentDimensions = "sm" | "md" | "lg" | "xl";

export type Theme = "light" | "dark" | "mugi";
