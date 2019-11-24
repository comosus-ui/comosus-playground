const Condition = require('../lib/classes/Condition');

module.exports = new Condition("Hover", "hv", selector => {
  return `${selector}:hover`
})