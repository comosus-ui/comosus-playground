const components = require('./comosus.components')
const theme = require('./comosus.theme')

module.exports = {
  plugins: [
    require('./comosus')({
      theme,
      components,
    })
  ]
}