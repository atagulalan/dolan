import { define, html } from '../hybrids.js'

export default define({
  tag: 'o-pre',
  render: ({ textContent }) => {
    return html`
      ${textContent
        .split('\n')
        .filter((el) => el.trim() !== '')
        .map((el) => html` <p>${el.trim()}</p> `)}
    `.css`
      :host {
        display:flex;
        flex-direction:column;
        gap: 7px;
      }
      p {
        margin: 0;
      }
    `
  }
})
