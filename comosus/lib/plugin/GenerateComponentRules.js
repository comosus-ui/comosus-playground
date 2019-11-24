const postcss = require('postcss')
const InterpretContextCollection = require('./InterpretContextCollection')

module.exports = (name, definition, pluginConfig) => {
  const {base, variants} = definition

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

  return contextCollections.reduce((out, collection) => {
    out.push(...InterpretContextCollection(collection, pluginConfig.theme))
    return out
  }, []).map(([selector, decls]) => {
    const rule = new postcss.rule()
    rule.selector = selector
    Object.entries(decls).forEach(([prop, value]) => {
      rule.append(new postcss.decl({prop, value}))
    })
    return rule
  })
}