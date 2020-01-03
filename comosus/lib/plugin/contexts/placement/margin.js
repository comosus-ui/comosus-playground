const PropertyInterpreter = require('../../../classes/PropertyInterpreter')
const GetThemeValue = require('../../../util/GetThemeValue')

module.exports = new PropertyInterpreter('margin', (input, theme) => {
  const type = typeof input

  if(type === 'function') {
    return {
      margin: input(theme)
    }
  } else if(type === 'string') {
    return {
      margin: GetThemeValue(theme, input)
    }
  } else if(type === 'object') {
    const topConfig = input.top || input.y || input.all
    const bottomConfig = input.bottom || input.y || input.all
    const leftConfig = input.left || input.x || input.all
    const rightConfig = input.right || input.x || input.all

    const topValue = typeof topConfig === 'function' ? topConfig(theme) : GetThemeValue(theme, topConfig)
    const bottomValue = typeof bottomConfig === 'function' ? bottomConfig(theme) : GetThemeValue(theme, bottomConfig)
    const leftValue = typeof leftConfig === 'function' ? leftConfig(theme) : GetThemeValue(theme, leftConfig)
    const rightValue = typeof rightConfig === 'function' ? rightConfig(theme) : GetThemeValue(theme, rightConfig)

    const value = [
      topValue,
      ...(rightValue !== topValue || bottomValue !== topValue || leftValue !== rightValue ? [rightValue] : []),
      ...(bottomValue !== topValue || leftValue !== rightValue ? [bottomValue] : []),
      ...(leftValue !== rightValue ? [leftValue] : [])
    ].join(' ')

    return {
      margin: value
    }
  }
})