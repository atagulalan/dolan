import { define, html } from '../hybrids.js'

export default define({
  tag: 'o-line',
  height: '2px',
  width: '-webkit-fill-available',
  color: 'var(--highlight)',
  marginX: '0px',
  marginY: '7px',
  render: ({ height, width, color, marginX, marginY }) => {
    return html``.css`
      :host {
        --height: ${height};
        --width: ${width};
        --margin-x: ${marginX};
        --margin-y: ${marginY};
        --color: ${color};
        height: var(--height);
        width: var(--width);
        margin: var(--margin-y) var(--margin-x);
        background: var(--color); 
        border-radius: 99px;
      }
    `
  }
})
