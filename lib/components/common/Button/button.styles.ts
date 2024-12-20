import { css } from "lit";

export const ButtonStyles = css`
  .common-button {
    border: 0;
    line-height: 1;
    cursor: pointer;
    border-radius: 3em;
    display: inline-block;
    font-weight: 700;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  .common-button--light {
    background-color: var(--light-background);
    color: var(--light-text);
  }
  .common-button--dark {
    background-color: var(--dark-background);
    color: var(--dark-text);
  }
  .common-button--mugi {
    background-color: var(--mugi-primary);
    color: var(--mugi-secondary);
  }
  .common-button--sm {
    padding: 8px 16px;
    font-size: 12px;
  }
  .common-button--md {
    padding: 10px 20px;
    font-size: 16px;
  }
  .common-button--lg {
    padding: 12px 24px;
    font-size: 22px;
  }

  .common-button--stretch {
    width: 100%;
  }
`;