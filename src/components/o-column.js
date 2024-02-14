import { define, html } from '../hybrids.js'

function isNumeric(str) {
  if (typeof str != 'string') return false // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ) // ...and ensure strings of whitespace fail
}

export default define({
  tag: 'o-column',
  width: '-webkit-fill-available',
  render: ({ width }) => {
    return html` <slot></slot> `.css`
      :host {
        --gap: 10px;
        --width: ${isNumeric(width) ? width + 'px' : width};
        width: min(var(--width), 100%);
        height: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        
      }
    `
  }
})
