import { define, html } from '../hybrids.js'

export default define({
  tag: 'o-image',
  src: '',
  render: ({ src }) => {
    return html`<img src="${src}" />`.css`
      :host {
        border-radius: var(--border-radius);
        width: -webkit-fill-available;
        height: auto;
        overflow: hidden;
        border: var(--border-width) solid var(--border-color);
        aspect-ratio: 3/2;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `
  }
})
