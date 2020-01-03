const Context = require('../../../classes/Context')
const color = require('./color')
const outline = require('./outline')
const shadow = require('./shadow')

class ContentContext extends Context {
  constructor() {
    super('background', [
      color,
      outline,
      shadow,
    ])
  }
}

module.exports = new ContentContext()