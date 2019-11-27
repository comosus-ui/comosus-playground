const Context = require('../../../classes/Context')
const column = require('./flex/column')
const row = require('./flex/row')

// idk if placement context is the move for the containers, prob for items though
class PlacementContext extends Context {
  constructor() {
    super('placement', [
      column,
      row
    ])
  }
}

module.exports = new PlacementContext()