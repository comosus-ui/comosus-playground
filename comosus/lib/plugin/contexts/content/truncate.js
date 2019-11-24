const PropertyInterpreter = require('../../../classes/PropertyInterpreter')

module.exports = new PropertyInterpreter('truncate', (input) => {
  return input === true ? {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap'
  } : {}
})