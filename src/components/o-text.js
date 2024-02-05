import { define, html } from '../hybrids.js'

export default define({
  tag: 'o-text',
  size: '24px',
  weight: '400',
  color: 'var(--text-color)',
  lineHeight: '150%',
  render: ({ size, weight, color, lineHeight }) => {
    return html`<slot></slot>`.css`
      :host {
        --size: ${size};
        --weight: ${weight};
        --color: ${color};
        --line-height: ${lineHeight};
        font-size: var(--size);
        font-weight: var(--weight);
        color: var(--color);
        line-height: var(--line-height);
      }
    `
  }
})
