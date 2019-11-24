const PropertyInterpreter = require('../../../classes/PropertyInterpreter')
const GetThemeValue = require('../../../util/GetThemeValue')

module.exports = new PropertyInterpreter('fontWeight', (input, theme) => {
  return {
    'font-weight': typeof input === 'function' ? input(theme) : GetThemeValue(theme, input)
  }
})