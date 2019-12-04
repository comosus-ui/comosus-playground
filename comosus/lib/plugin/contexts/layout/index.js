const Context = require('../../../classes/Context')
const column = require('./flex/column')
const row = require('./flex/row')
const autoGrid = require('./grid/autoGrid')
const namedGrid = require('./grid/namedGrid')

// idk if placement context is the move for the containers, prob for items though
class PlacementContext extends Context {
  constructor() {
    super('placement', [
      column,
      row,
      autoGrid,
      namedGrid
    ])
  }
}

module.exports = new PlacementContext()