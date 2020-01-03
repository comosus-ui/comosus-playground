const Context = require('../../../classes/Context')
const padding = require('./padding')
const margin = require('./margin')

class PlacementContext extends Context {
  constructor() {
    super('placement', [
      padding,
      margin
    ])
  }
}

module.exports = new PlacementContext()