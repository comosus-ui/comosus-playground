const PropertyInterpreter = require('../../../classes/PropertyInterpreter')
const GetThemeValue = require('../../../util/GetThemeValue')

module.exports = new PropertyInterpreter('fontFamily', (input, theme) => {
  return {
    'font-family': typeof input === 'function' ? input(theme) : GetThemeValue(theme, input)
  }
})