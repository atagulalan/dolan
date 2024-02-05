import { define, html } from '../hybrids.js'
import './o-button.js'

function showMoreOnCard(host) {
  const content = host.shadowRoot.querySelector('.content')
  const innerContent = host.shadowRoot.querySelector('.inner')

  content.style.height = host.isCollapsed
    ? innerContent.scrollHeight + 10 + 'px'
    : 'var(--height)'
  host.isCollapsed = !host.isCollapsed
}

export default define({
  tag: 'o-card',
  gap: '10px',
  width: '-webkit-fill-available',
  height: 'fit-content',
  paddingX: '19px',
  paddingY: '17px',
  background: 'var(--gray-2)',
  isCollapsed: true,
  hasShowMoreMask: ({ isCollapsed, height }) =>
    height !== 'fit-content' && isCollapsed,
  render: ({
    isCollapsed,
    hasShowMoreMask,
    gap,
    width,
    height,
    paddingX,
    paddingY,
    background
  }) => {
    return html`
      <div class="content">
        <div class="inner"><slot></slot></div>
        ${hasShowMoreMask && html`<div class="show-more-mask"></div>`}
      </div>
      ${height !== 'fit-content' &&
      html`
        <o-button
          class="show-more"
          background="transparent"
          size="14px"
          padding-x="42px"
          on-custom-click="${showMoreOnCard}"
          center
        >
          ${isCollapsed ? 'Show more' : 'Show less'}
        </o-button>
      `}
    `.css`
      :host {
        --gap: ${gap};
        --width: ${width};
        --height: ${height};
        --padding-x: ${paddingX};
        --padding-y: ${paddingY};
        --background: ${background};
        width: var(--width);
        height: auto;
        font-family: 'Encode Sans Semi Condensed', sans-serif;
        position: relative;
        flex-shrink: 0;
      }
      .content {
        background: var(--background);
        border-radius: var(--border-radius);
        border: var(--border-width) solid var(--border-color);
        gap: var(--gap);
        height: var(--height);
        overflow: hidden;
        transition: height 1s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        width: 100%;
        box-sizing: border-box;
      }
      .inner{
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        padding: var(--padding-y) var(--padding-x);
      }
      .show-more {
        z-index: 2;
        position: relative;
        transform: translateY(-50%);
      }
      .show-more-mask {
        text-align: center;
        bottom: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(rgba(255,255,255,0) 0%, var(--gray-2) 90%, var(--gray-2) 100%);
        z-index: 1;
        border-radius: 0 0 var(--border-radius) var(--border-radius);
      }
    `
  }
})
