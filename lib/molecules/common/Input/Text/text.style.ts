import { css } from "lit";

export const TextStyles = css`
  :host {
    --input-font-size: 0.875rem;
  }

  .mugi-text-input {
    box-sizing: border-box;
    font-size: var(--input-font-size);
    padding: var(--input-padding);
    border: 1px solid var(--border-color, #ccc);
    background-color: var(--input-bg, white);
  }

  .mugi-text-input:focus {
    outline: none;
    border-color: var(--focus-color, #0078d4);
  }
  .mugi-text-input[disabled] {
    background-color: var(--disabled-bg, #f0f0f0);
    cursor: not-allowed;
  }

  .mugi-text-input--x-stretch {
    width: 100%;
  }

  .mugi-text-input--y-stretch {
    height: 100%;
  }

  .mugi-text-input--stretch {
    width: 100%;
    height: 100%;
  }
`;
