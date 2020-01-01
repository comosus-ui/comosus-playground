const GenerateComponentRules = require('./GenerateComponentRules')
const GenerateComponentDocs = require('./GenerateComponentDocs')

module.exports = (root, componentsRule, pluginConfig) => {

  let last = componentsRule
  let docs = []

  Object.entries(pluginConfig.components).forEach(([name, component]) => {
    const componentRules = GenerateComponentRules(name, component, pluginConfig)

    componentRules.forEach(rule => {
      root.insertAfter(last, rule)
      last = rule
    })

    docs.push(GenerateComponentDocs.generateDocs(name, component, pluginConfig))
  })

  require('fs').writeFile("./dist/docs.html", 
    GenerateComponentDocs.wrapDocs(docs.join('\n\n')), (err) => {
      if(err) return console.log(err)
      console.log("yay!")
    }
  )
  componentsRule.remove()
}