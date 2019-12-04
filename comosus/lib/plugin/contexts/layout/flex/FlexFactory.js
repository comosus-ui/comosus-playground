const PropertyInterpreter = require('../../../../classes/PropertyInterpreter')

module.exports = (variant) => new PropertyInterpreter(variant, (input) => {
  const mainAxisVal = (inputVal) => {
    switch (inputVal) {
      case 'start':
      case 'end':
        return `flex-${inputVal}`
      case 'between':
      case 'around':
        return `space-${inputVal}`
      case 'center':
        return inputVal
      default:
        return 'flex-start'
    }
  }
  const crossAxisVal = (inputVal) => {
    switch (inputVal) {
      case 'start':
      case 'end':
        return `flex-${inputVal}`
      case 'stretch':
      case 'baseline':
      case 'center':
        return inputVal
      default:
        return 'flex-start'
    }
  }

  const placementMap = {
    'start': ['flex-start', 'flex-start'],
    'center': ['center', 'center'],
    'start-center': ['flex-start', 'center'],
  }
  
  // give priority to shortcuts
  const hasPlacement = Object.keys(placementMap).includes(input.placement);
  const mainAxisValue = hasPlacement ? placementMap[input.placement][0] : mainAxisVal(input.mainAxis);
  const crossAxisValue = hasPlacement ? placementMap[input.placement][1] : crossAxisVal(input.crossAxis);
  const directionValue = input.direction === 'reverse' ? `${variant}-reverse` : variant;

  return {
    'display': 'flex',
    'justify-content': mainAxisValue,
    'align-items': crossAxisValue,
    'flex-direction': directionValue
  }
})