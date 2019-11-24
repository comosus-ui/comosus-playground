const Context = require('../../../classes/Context')
const color = require('./color')

class ContentContext extends Context {
  constructor() {
    super('background', [
      color,
    ])
  }
}

module.exports = new ContentContext()