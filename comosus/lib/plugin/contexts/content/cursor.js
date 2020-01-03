const PropertyInterpreter = require('../../../classes/PropertyInterpreter')
const GetThemeValue = require('../../../util/GetThemeValue')

module.exports = new PropertyInterpreter('cursor', (input, theme) => {
  return {
    cursor: typeof input === 'function' ? input(theme) : GetThemeValue(theme, input)
  }
})