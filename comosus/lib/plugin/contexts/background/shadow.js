const PropertyInterpreter = require('../../../classes/PropertyInterpreter')
const GetThemeValue = require('../../../util/GetThemeValue')

module.exports = new PropertyInterpreter('shadow', (input, theme) => {
  return {
    'box-shadow': typeof input === 'function' ? input(theme) : GetThemeValue(theme, input)
  }
})