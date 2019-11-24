const PropertyInterpreter = require('../../../classes/PropertyInterpreter')
const GetThemeValue = require('../../../util/GetThemeValue')

module.exports = new PropertyInterpreter('leading', (input, theme) => {
  return {
    'line-height': typeof input === 'function' ? input(theme) : GetThemeValue(theme, input)
  }
})