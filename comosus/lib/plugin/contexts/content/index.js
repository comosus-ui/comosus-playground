const Context = require('../../../classes/Context')
const color = require('./color')
const fontWeight = require('./fontWeight')
const fontFamily = require('./fontFamily')
const leading = require('./leading')
const truncate = require('./truncate')

class ContentContext extends Context {
  constructor() {
    super('content', [
      color,
      fontWeight,
      fontFamily,
      leading,
      truncate,
    ])
  }
}

module.exports = new ContentContext()