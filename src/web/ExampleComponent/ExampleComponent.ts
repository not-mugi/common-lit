import { LitElement, html, css } from 'lit';

class ExampleComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
    div {
      color: blue;
    }
  `;

  render() {
    return html`<div>Hello, World!</div>`;
  }
}

customElements.define('example-component', ExampleComponent);