import { define, html } from '../hybrids.js'
import './o-layout.js'
import './o-image.js'
import './o-link.js'

export default define({
  tag: 'o-location',
  image: 'https://source.unsplash.com/random/800x600',
  to: '#',
  render: ({ image, to }) => {
    return html`
      <o-layout flex-direction="row" flex-wrap="wrap">
        <o-image src="${image}" width="100%" height="300px"></o-image>
        <o-link to="${to}" margin="0 0 0 0" padding="0 0 0 0" width="100%">
          <slot></slot>
        </o-link>
      </o-layout>
    `.css`
      :host {
        width: -webkit-fill-available;
        height: auto;
        overflow: hidden;
      }
    `
  }
})
