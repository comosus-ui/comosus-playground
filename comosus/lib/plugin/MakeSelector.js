const conditions = require('../../conditions')

const conditionsArray = Object.entries(conditions).map(([, condition]) => condition)

module.exports = (name, condition) => {
  if(condition === 'default') {
    return `.${name}`
  } else {
    // split conditions by the -, which represents "or"
    // foreach item in that list, break into 2 char codes, etc etc
    console.log(condition.split('-'))
    const conditionGroups = condition.split('-').map(cond => {
      const conditionKeys = cond.match(/.{1,2}/g)
      const selectorConditions = []
      conditionKeys.forEach(code => {
        const condition = conditionsArray.find(c => c.code === code)
        if(condition) {
          selectorConditions.push(condition)
        } else {
          console.warn(`Unknown condition code "${code}" in context "${name}"`)
        }
      })

      selectorConditions.sort((a, b) => a.priority - b.priority)

      let selector = `.${name}`
      selectorConditions.forEach(condition => {
        selector = condition.transform(selector)
      })

      return selector
    })

    return conditionGroups.join(', ')
  }
}