import { define, html } from '../hybrids.js'

export default define({
  tag: 'o-sub-title',
  render: () => {
    return html`
      <o-text size="12px" color="var(--light-blue)" weight="600">
        <slot></slot>
      </o-text>
    `.css`
      :host {
        cursor: default;
      }
    `
  }
})
