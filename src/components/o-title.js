import { define, html } from '../hybrids.js'

export default define({
  tag: 'o-title',
  render: () => {
    return html`
      <o-text size="24px" color="var(--light-blue)" weight="600">
        <slot></slot>
      </o-text>
    `.css`
      :host {
        cursor: default;
      }
    `
  }
})
