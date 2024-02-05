import { define, html, dispatch } from '../hybrids.js'

function handleOnMouseMove(host, event) {
  const rect = event.target.getBoundingClientRect(),
    x = event.clientX - rect.left,
    y = event.clientY - rect.top

  host.style.setProperty('--mouse-x', `${x}px`)
  host.style.setProperty('--mouse-y', `${y}px`)
}

function handleOnClick(host, event) {
  dispatch(host, '-custom-click', { detail: host.value })
}

export default define({
  tag: 'o-button',
  width: 'fit-content',
  height: 'fit-content',
  background: 'var(--gray-2)',
  paddingX: '14px',
  paddingY: '7px',
  size: '18px',
  weight: '600',
  color: 'var(--gray-4)',
  center: false,
  render: ({
    width,
    height,
    background,
    paddingX,
    paddingY,
    size,
    weight,
    color,
    center
  }) => {
    return html`
      <button onmousemove="${handleOnMouseMove}" onclick="${handleOnClick}">
        <o-text weight="${weight}" size="${size}" color="${color}">
          <slot></slot>
        </o-text>
      </button>
    `.css`
      :host{
        --background: ${background};
        --width: ${center ? '100%' : width};
        --height: ${height};
        --padding-x: ${paddingX};
        --padding-y: ${paddingY};
        --border-radius: 99px;
        width: var(--width);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button {
        background: var(--background);
        border-radius: var(--border-radius);
        border: var(--border-width) solid var(--border-color);
        height: var(--height);
        width: ${center ? 'fit-content' : 'var(--width)'};
        padding: var(--padding-y) var(--padding-x);
        transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        position: relative;
        cursor: pointer;
      }
      button:hover{
        background: var(--highlight);
      }
      button:hover::before {
        opacity: 1;
      }
      button::before {
        background: radial-gradient(var(--hover-circle-size) circle at var(--mouse-x) var(--mouse-y),rgba(255,255,255,0.06),transparent 40%);
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        border-radius: inherit;
        z-index: 2;
        opacity: 0;
        transition: opacity 500ms;
      }
    `
  }
})
