const GenerateComponentRules = require('./GenerateComponentRules')

module.exports = (root, componentsRule, pluginConfig) => {

  let last = componentsRule

  Object.entries(pluginConfig.components).forEach(([name, component]) => {
    const componentRules = GenerateComponentRules(name, component, pluginConfig)

    componentRules.forEach(rule => {
      root.insertAfter(last, rule)
      last = rule
    })
  })

  componentsRule.remove()
}