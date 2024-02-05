import { TRIPS } from '../trips/trips.js'

const INDENT_SIZE = 2
function oToHtml(o) {
  let lines = o.trim().split('\n')
  let html = ''
  let stack = []
  for (let line of lines) {
    const rgx = /^(\s*)(?:([a-zA-Z\-]+)(\[.*\])?|\|)(?:\s)?(.*)$/g
    if (line.match(rgx) === null) throw new Error('Invalid line at' + line)
    let [indent, tag, attributes, content] = rgx.exec(line).slice(1)
    indent = indent.length / INDENT_SIZE
    content = content?.trim?.() || ''
    attributes = attributes?.slice(1, -1) || ''
    const isPipe = tag === undefined
    if (isPipe) {
      html += '\r' + content.trim()
      continue
    }
    if (tag) {
      while (indent < stack.length) {
        html += stack.pop()
      }
      html += `<${tag}${attributes && ` ${attributes}`}>`
      stack.push(`</${tag}>`)
    }
    if (content) {
      html += content.trim()
    }
  }
  while (stack.length) {
    html += stack.pop()
  }
  return html
}

function importComponents() {
  // look for custom elements in the document and import them
  const components = document.querySelectorAll('*')
  // if has dash in name, import
  components.forEach((component) => {
    if (component.tagName.includes('-')) {
      import(`./components/${component.tagName.toLowerCase()}.js`)
    }
  })
}

// get trip from url
function getTrip(trip) {
  fetch('./trips/' + trip + '.o').then(async (response) => {
    const text = await response.text()
    // append to body
    document.body.innerHTML += oToHtml(text)
    importComponents()
  })
}

TRIPS.forEach((trip) => {
  getTrip(trip)
})
