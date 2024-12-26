/**
 * Helper function to register web components
 * This helps with tree-shaking by allowing selective component registration
 */
export const register = (
  tag: string,
  component: CustomElementConstructor,
  options?: ElementDefinitionOptions
): void => {
  if (!customElements.get(tag)) {
    customElements.define(tag, component, options);
  }
};