export function constructCSSClass(classes: { [x: string]: boolean }): string {
  const entries = Object.entries(classes);
  return entries
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(" ");
}
