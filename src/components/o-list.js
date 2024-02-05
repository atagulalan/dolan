import { define, html } from '../hybrids.js'
import './o-layout.js'

export default define({
  tag: 'o-list',
  render: () => {
    return html`
      <o-layout flex-direction="row" flex-wrap="wrap">
        <slot></slot>
      </o-layout>
    `
  }
})
