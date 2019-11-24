const Context = require('../../../classes/Context')
const padding = require('./padding')

class PlacementContext extends Context {
  constructor() {
    super('placement', [
      padding
    ])
  }
}

module.exports = new PlacementContext()