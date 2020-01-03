const PropertyInterpreter = require('../../../classes/PropertyInterpreter')
const GetThemeValue = require('../../../util/GetThemeValue')

module.exports = new PropertyInterpreter('textTransform', (input, theme) => {
  return {
    'text-transform': typeof input === 'function' ? input(theme) : GetThemeValue(theme, input)
  }
})