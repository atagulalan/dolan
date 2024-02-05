import { define, html, svg } from '../hybrids.js'

const icons = {
  warning: {
    viewBox: '0 0 13 13',
    svg: svg`<path d="M6.5 10V10.01" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"/><path d="M6.5 8L6.5 3" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round"/><circle cx="6.5" cy="6.5" r="5.75" stroke="#EB5757" stroke-width="1.5"/>`
  },
  link: {
    viewBox: '0 0 142 142',
    svg: svg`<path fill="white" d="m57 63-36 37a24 24 0 0 0 0 34c4 5 11 7 17 7 7 0 13-2 17-7l37-36c7-8 9-19 4-28l-8 8c1 4 0 9-4 13l-37 37a14 14 0 0 1-19-1c-3-2-4-6-4-10 0-3 1-7 3-9l1-1 36-36a14 14 0 0 1 13-4l8-8a24 24 0 0 0-28 4m71-39a24 24 0 0 0-25-24c-6 0-12 2-17 7L50 43c-8 8-9 19-5 29l8-8c-1-4 0-9 3-12l1-1 36-37a14 14 0 0 1 20 0c6 6 6 15 0 20L76 72a14 14 0 0 1-12 3l-8 8a24 24 0 0 0 28-5l37-36c4-5 7-11 7-18"/>`
  },
  dot: {
    viewBox: '0 0 16 16',
    svg: svg`<circle cx="8" cy="8" r="3" stroke="#8D96AE" stroke-width="2"/>`
  },
  circle: {
    viewBox: '0 0 16 16',
    svg: svg`<circle cx="8" cy="8" r="7" stroke="#8D96AE" stroke-width="2"/>`
  },
  check: {
    viewBox: '0 0 16 16',
    svg: svg`
    <circle cx="8" cy="8" r="7" stroke="#8D96AE" stroke-width="2"/>
    <circle cx="8" cy="8" r="1.5" stroke="var(--blue)" stroke-width="4"/>
    `
  },
}

export default define({
  tag: 'o-icon',
  type: '',
  width: '16',
  render: ({ type, width }) => {
    return html`
      <svg viewBox="${icons[type]?.viewBox}" fill="transparent">
        ${icons[type]?.svg}
      </svg>
    `.css`
      :host {
        display: flex;
        width: ${width}px;
      }
    `
  }
})
