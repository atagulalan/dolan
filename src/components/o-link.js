import { define, html } from '../hybrids.js'
import './o-icon.js'

function redirect(host, event) {
  console.dir(host)
  const link = document.createElement('a')
  link.href = host.to
  link.target = '_blank'
  link.click()
}

export default define({
  tag: 'o-link',
  width: '-webkit-fill-available',
  background: 'var(--gray-2)',
  paddingX: '14px',
  paddingY: '7px',
  to: '#',
  render: ({ width, background, paddingX, paddingY, to }) => {
    return html`
      <o-button on-custom-click="${redirect}" size="16px">
        <o-layout class="card" wrap="no-wrap" align="center" gap="10px">
          <o-text weight="600" size="18" color="var(--gray-4)">
            <slot></slot>
          </o-text>
          <o-icon type="link"></o-icon>
        </o-layout>
      </button>
    `.css`
      :host{
        --background: ${background};
        --width: ${width};
        --padding-x: ${paddingX};
        --padding-y: ${paddingY};
      }
    `
  }
})
