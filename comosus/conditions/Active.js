const Condition = require('../lib/classes/Condition');

module.exports = new Condition("Active", "av", selector => {
  return `${selector}:active`
})