/**
 * Type checking utilities for runtime validation
 */

// const isString = (value: unknown): value is string => typeof value === 'string';
// const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

/**
 * Custom error for component validation
 */
export class ComponentValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ComponentValidationError";
  }
}

/**
 * Validate props at runtime
 */
export const validateProps = <T extends Record<string, unknown>>(
  props: T,
  validations: { [K in keyof T]?: (value: unknown) => boolean }
): void => {
  Object.entries(validations).forEach(([key, validator]) => {
    if (validator && !validator(props[key])) {
      throw new ComponentValidationError(
        `Invalid value for property "${key}": ${String(props[key])}`
      );
    }
  });
};
