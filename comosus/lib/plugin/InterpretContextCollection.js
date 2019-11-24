const contexts = require('./contexts')
const MakeSelector = require('./MakeSelector')

module.exports = ({name, collection}, theme) => {
  const contextCollectionRuleMap = {}
  Object.entries(collection).forEach(([contextName, contextConfig]) => {
    const context = contexts[contextName]
    if(context) {
      const contextRuleMap = context.generateMap(contextConfig, theme)
      Object.entries(contextRuleMap).forEach(([condition, propertyConfig]) => {
        if(contextCollectionRuleMap[condition] == null) {
          contextCollectionRuleMap[condition] = {}
        }

        contextCollectionRuleMap[condition] = { ...contextCollectionRuleMap[condition], ...propertyConfig}
      })
    } else {
      console.warn(`Unrecognized Context "${contextName}" found in the definition for "${name}"`)
    }
  })

  // transform condition names into selectors
  const selectorDeclTuples = Object.entries(contextCollectionRuleMap).map(
    ([condition, properties]) => ([MakeSelector(name, condition), properties])
  )
  return selectorDeclTuples
}