const Context = require('../../../classes/Context')
const color = require('./color')
const cursor = require('./cursor')
const fontWeight = require('./fontWeight')
const fontFamily = require('./fontFamily')
const leading = require('./leading')
const truncate = require('./truncate')
const textTransform = require('./textTransform')

class ContentContext extends Context {
  constructor() {
    super('content', [
      color,
      cursor,
      fontWeight,
      fontFamily,
      leading,
      truncate,
      textTransform,
    ])
  }
}

module.exports = new ContentContext()