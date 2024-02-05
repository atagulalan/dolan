import { define, html } from '../hybrids.js'
import './o-icon.js'

export default define({
  tag: 'o-item',
  title: '',
  status: '',
  important: false,
  empty: false,
  check: false,
  type: (host) => {
    if (host.important) return 'warning'
    else if (host.empty) return 'circle'
    else if (host.check) return 'check'
    else return 'dot'
  },
  render: ({ title, type, status }) => {
    return html`
      <o-layout wrap="no-wrap">
        <o-icon type="${type}" width="16"></o-icon>
        <o-layout wrap="no-wrap" flex-direction="column" gap="0px">
          ${status
            ? html`
                <o-layout
                  wrap="no-wrap"
                  justify="space-between"
                  flex-direction="row"
                  
                >
                  <o-text size="16px" color="var(--white)" weight="500">
                    ${title}
                  </o-text>
                  <o-text size="16px" color="var(--gray-4)" weight="500">
                    ${status}
                  </o-text>
                </o-layout>
              `
            : html`
                <o-text size="16px" color="var(--white)" weight="500">
                  ${title}
                </o-text>
              `}
          <o-text
            size="12.5px"
            color="var(--gray-4)"
            weight="500"
          >
            <slot></slot>
          </o-text>
        </o-layout>
      </o-layout>
    `.css`
      :host {
        line-height: 100%;
        width: -webkit-fill-available;
        height: fit-content;
        font-family: 'Encode Sans Semi Condensed', sans-serif;
      }
      o-icon{
        min-width: 16px;
        margin-top: 5px;
      }
    `
  }
})
