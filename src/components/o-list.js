import { define, html } from '../hybrids.js'
import './o-layout.js'

export default define({
  tag: 'o-list',
  justify: 'flex-start',
  render: ({ justify }) => {
    return html`
      <o-layout flex-direction="row" flex-wrap="wrap" justify="${justify}">
        <slot></slot>
      </o-layout>
    `
  }
})
