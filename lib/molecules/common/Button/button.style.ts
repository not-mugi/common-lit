import { css } from "lit";

export const ButtonStyles = css`
  :host {
    --button-background-color: var(--light-background);
    --button-text-color: var(--light-text);
    --button-font-size: 1rem;
  }

  .mugi-button {
    border: 0;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    outline: 0;
    position: relative;
    align-items: center;
    justify-content: center;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    background-color: var(--button-background-color);
    color: var(--button-text-color);
    font-size: var(--button-font-size);
    font-weight: 500;
    line-height: 1.75;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .mugi-button:hover:not(.button--disabled) {
    background-color: var(
      --button-hover-background-color,
      rgba(0, 123, 255, 0.9)
    );
  }

  .mugi-button--sm {
    padding: 4px 10px;
    font-size: 0.8125rem;
  }

  .mugi-button--md {
    padding: 6px 16px;
    font-size: 1rem;
  }

  .mugi-button--lg {
    padding: 8px 22px;
    font-size: 1.2rem;
  }

  .mugi-button--x-stretch {
    width: 100%;
  }

  .mugi-button--y-stretch {
    height: 100%;
  }

  .mugi-button--outlined {
    border: 1px solid currentColor;
    background-color: transparent;
    color: var(--button-background-color);
  }

  .mugi-button--text {
    background-color: transparent;
    color: var(--button-background-color);
    padding: 6px 8px;
  }

  .mugi-button--disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  /* Theme variations */
  .mugi-button--light {
    background-color: var(--light-background, #f8f9fa);
    color: var(--light-text, #212529);
  }

  .mugi-button--light:hover:not(.button--disabled) {
    background-color: var(--light-text, #212529);
    color: var(--light-background, #f8f9fa);
  }

  .mugi-button--dark {
    background-color: var(--dark-background, #212529);
    color: var(--dark-text, #f8f9fa);
  }

  .mugi-button--dark:hover:not(.button--disabled) {
    background-color: var(--dark-text, #f8f9fa);
    color: var(--dark-background, #212529);
  }

  .mugi-button--mugi {
    background-color: var(--mugi-primary, #007bff);
    color: var(--mugi-secondary, #ffffff);
  }

  .mugi-button--mugi:hover:not(.button--disabled) {
    background-color: var(--mugi-secondary, #ffffff);
    color: var(--mugi-primary, #007bff);
  }

  .mugi-button--rounded-sm {
    border-radius : var(--sm-b-radius)
  }

  .mugi-button--rounded-md {
    border-radius: var(--md-b-radius);
  }

  .mugi-button--rounded-lg {
    border-radius: var(--lg-b-radius)
  }

  .mugi-button--rounded-xl {
    border-radius: var(--xl-b-radius)
  }
`;