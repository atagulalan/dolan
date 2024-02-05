import { define, html } from '../hybrids.js'

export default define({
  tag: 'o-layout',
  gap: '10px',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  align: 'flex-start',
  justify: 'flex-start',
  width: '-webkit-fill-available',
  render: ({ gap, flexWrap, flexDirection, align, justify, width }) => {
    return html` <slot></slot> `.css`
      :host {
        --gap: ${gap};
        --flex-wrap: ${flexWrap};
        --flex-direction: ${flexDirection};
        --align: ${align};
        --justify: ${justify};
        --width: ${width};
        display: flex;
        width: var(--width);
        gap: var(--gap);
        flex-wrap: var(--flex-wrap);
        flex-direction: var(--flex-direction);
        align-items: var(--align);
        justify-content: var(--justify);
      }
    `
  }
})
