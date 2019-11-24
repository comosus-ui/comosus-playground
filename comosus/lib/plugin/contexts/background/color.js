const PropertyInterpreter = require('../../../classes/PropertyInterpreter')
const GetThemeValue = require('../../../util/GetThemeValue')

module.exports = new PropertyInterpreter('color', (input, theme) => {
  return {
    'background-color': typeof input === 'function' ? input(theme) : GetThemeValue(theme, input)
  }
})