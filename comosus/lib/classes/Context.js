class Context {
  constructor(key, interpreters) {
    this.key = key
    this.interpreters = interpreters
  }

  generateMap(config, theme) {
    const combinedPropertyMap = {}
    Object.entries(config).forEach(([property, propertyConfig]) => {
      const interpreter = this.interpreters.find(int => int.property === property)
      if(interpreter) {
        const propertyMap = interpreter.interpret(propertyConfig, theme)

        Object.entries(propertyMap).forEach(([condition, propertyConfig]) => {
          if(combinedPropertyMap[condition] == null) {
            combinedPropertyMap[condition] = {}
          }

          combinedPropertyMap[condition] = { ...combinedPropertyMap[condition], ...propertyConfig}
        })
      } else {
        console.warn(`No interpreter "${property}" found in context "${this.key}"`)
      }
    })

    return combinedPropertyMap
  }
}

module.exports = Context