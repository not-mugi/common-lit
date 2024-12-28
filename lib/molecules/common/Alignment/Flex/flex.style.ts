import { css } from "lit";

export const FlexStyles = css`
  :host {
    display: flex;
    flex-direction: row;
    justify-content: var(--justify-content, flex-start);
    align-items: var(--align-items, flex-start);
    gap: var(--gap, 0);
    width: var(--width, auto);
    height: var(--height, auto);
  }
`;
