import { css } from "lit";

export const ButtonStyles = css`
  .mugi-container--sm {
    width: var(--container-width, auto);
    height: var(--container-height, auto);
    border: var(--container-border, none);
    background-color: var(--container-background-color, blue);
    z-index: var(--container-z-index, 1);
  }
`;
