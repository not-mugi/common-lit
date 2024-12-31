import { css } from "lit";

export const BoundaryStyles = css`
  .mugi-boundary {
    width: var(--width);
    height: var(--height);
    border: var(--border);
    background: var(--background);
    color: var(--color);
    padding: var(--padding);
    margin: var(--margin);
    display: var(--display);
    overflow: hidden;
  }

  .mugi-boundary-b-radius--none {
    border-radius: 0;
  }

  .mugi-boundary-b-radius--rounded {
    border-radius: 0.25rem;
  }

  .mugi-boundary-b-radius--circle {
    border-radius: 50%;
  }

  .mugi-boundary-b-radius--sm {
    border-radius: var(--sm-b-radius);
  }

  .mugi-boundary-b-radius--md {
    border-radius: var(--md-b-radius);
  }

  .mugi-boundary-b-radius--lg {
    border-radius: var(--lg-b-radius);
  }

  .mugi-boundary-b-radius--xl {
    border-radius: var(--xl-b-radius);
  }

  .mugi-boundary--sm {
    font-size: var(--sm-font-size);
    width: var(--sm-width);
    height: var(--sm-height);
  }

  .mugi-boundary--md {
    font-size: var(--md-font-size);
    width: var(--md-width);
    height: var(--md-height);
  }

  .mugi-boundary--lg {
    font-size: var(--lg-font-size);
    width: var(--lg-width);
    height: var(--lg-height);
  }

  .mugi-boundary--xl {
    font-size: var(--xl-font-size);
    width: var(--xl-width);
    height: var(--xl-height);
  }

  .mugi-boundary--auto {
    width: auto;
    height: auto;
  }

  .mugi-boundary--stretch {
    width: 100%;
    height: 100%;
  }

  .mugi-boundary--fit-content {
    width: fit-content;
    height: fit-content;
  }

  .mugi-boundary--max-content {
    width: max-content;
    height: max-content;
  }

  .mugi-boundary--min-content {
    width: min-content;
    height: min-content;
  }
`;
