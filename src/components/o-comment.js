import { define, html } from '../hybrids.js'
import './o-card.js'
import './o-text.js'
import './o-pre.js'

export default define({
  tag: 'o-comment',
  value: '',
  render: ({ innerHTML }) => {
    return html`
      <o-card background="var(--gray-3)" padding-x="14px" padding-y="10px">
        <o-text size="12.5px" color="var(--gray-4)" weight="500">
          <o-pre>${innerHTML}</o-pre>
        </o-text>
      </o-card>
    `
  }
})
