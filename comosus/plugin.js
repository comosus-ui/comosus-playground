const postcss = require('postcss')
const {GenerateComponents, defaultConfig} = require('./lib/plugin')


module.exports = postcss.plugin('comosus', ({theme, components = {}, config = {}}) => {

  if(!theme) {
    throw new Error('Comosus requires a theme configuration')
  }

  const pluginConfig = {
    theme,
    components,
    config: {
      ...defaultConfig,
      ...config
    }
  }

  return root => {
    root.walkAtRules('comosus', rule => {
      if(rule.params === 'components') {
        GenerateComponents(root, rule, pluginConfig)
      }
    })
  }
})
