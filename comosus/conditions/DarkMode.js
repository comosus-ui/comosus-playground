const Condition = require('../lib/classes/Condition');

module.exports = new Condition("DarkMode", "dm", selector => {
  return `.theme--dark ${selector}`
})