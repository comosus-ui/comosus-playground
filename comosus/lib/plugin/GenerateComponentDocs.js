const postcss = require('postcss')
const InterpretContextCollection = require('./InterpretContextCollection')

const loremContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci. Egestas egestas fringilla phasellus faucibus. Lectus nulla at volutpat diam ut venenatis tellus in. Et magnis dis parturient montes nascetur. Leo vel orci porta non pulvinar neque. Est lorem ipsum dolor sit. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Duis at tellus at urna condimentum mattis pellentesque id. Nibh cras pulvinar mattis nunc sed blandit libero."
const putContent = (name, context, content) => `<div class="${[name, context].join(' ')}">${content}</div>`
const divContent = (content) => `<div>${content}</div>`

const handleContentString = (name, context, content) => {
  const loremNum = parseInt(content.split(/lorem-([0-9]+)/).join(''))
  if(content === "$default") {
    return putContent(name, context, context)
  }
  else if(loremNum) {
    return putContent(
      name, 
      context, 
      divContent(loremContent.split(/\s+/).slice(0, loremNum).join(' '))
    )
  } else {
    return putContent(
      name, 
      context, 
      content
    )
  }
}

// this is bad, will fix later LOL
const handleContentStringShallow = (content) => {
  const loremNum = parseInt(content.split(/lorem-([0-9]+)/).join(''))
  if(content === "$default") {
    return divContent(content)
  }
  else if(loremNum) {
    return divContent(loremContent.split(/\s+/).slice(0, loremNum).join(' '))
  }
}

const generateContent = (name, content, contexts) => {
  if(!content) return 'No example provided'
  return contexts.map(context => {
    let res = [`<h2>${context}</h2>`]
    switch (typeof content) {
      case 'string':
        res.push(handleContentString(name, context, content))
        break;
      case 'boolean':
        if(content) res.push(handleContentString(name, context, "$default"))
        break;
      case 'object':
        if(Array.isArray(content)) {
          const numChildren = parseInt(content[0])
          console.log("IS ARRAY:", content, numChildren)
          if(numChildren) {
            const children = content.slice(1)
            let arrContent = []
            for(let i = 0; i < numChildren; i++) {
              arrContent.push(handleContentStringShallow(children[i % children.length]))
            }
            res.push(handleContentString(name, context, arrContent.join('\n')))
          } else {
            content.forEach(child => res.push(handleContentString(name, context, child)))
          }
        }
        break;
      default:
        console.error("Unsupported content format: ", typeof content);
        break;
    }

    return res.join('\n')
  }).join('\n');
}


module.exports = {
  generateDocs: (name, definition, pluginConfig) => {
    const { base, variants, docs } = definition
    const contextCollections = []
    
    const componentName = pluginConfig.config.ComponentName(name)

    if(base) {
      contextCollections.push({
        name: componentName,
        collection: base
      })
    }
  
    if(variants) {
      contextCollections.push(
        ...Object.entries(variants).map(([variantName, variantDefinition]) => ({
          name: pluginConfig.config.VariantName(componentName, variantName),
          collection: variantDefinition
        }))
      )
    }

    let documentation = []

    let markdownContent = [
      `# ${name}`,
      `Component name: \`${componentName}\``,
    ]

    let contexts = contextCollections.map((e, i) => `<div class="${[componentName, e.name].join(' ')}">${e.name}</div>`)
    let content = "$default"

    if(docs) {
      const description = docs.description || "no given description"
      markdownContent.push(description)
      if(docs.content) {
        content = docs.content
      }
    } else {
      markdownContent.push("no documentation present 😢")
    }
    
    documentation.push(
      require('markdown-it')().render(markdownContent.join('\n\n'))
    )
    documentation.push(generateContent(componentName, content, contextCollections.map(e => e.name)))


    return '<div class="comosus-docs__component">\n' + documentation.join('\n') + '</div>';
  },
  wrapDocs: (documentation) => {
    return `<html>\n<head><link rel="stylesheet" href="main.css"></head>\n<body>\n${documentation}\n</body>\n</html>\n`
  }
}