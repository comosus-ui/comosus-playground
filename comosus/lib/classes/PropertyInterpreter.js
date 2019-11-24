
class PropertyInterpreter {
  constructor(property, interpreter) {
    this.property = property
    this.interpreter = interpreter
  }

  normalizeInputSignature(input) {
    let normalizedInput

    switch(typeof input) {
      case 'string':
      case 'function':
      case 'boolean':
        normalizedInput = { default: input }
        break
      case 'object':
        normalizedInput = input
        break
      default:
        console.warn(`Unrecognized type ${typeof input} for ${this.property}`)
    }

    return normalizedInput
  }

  interpret(input, theme) {

    /*
    input could be:
    - A theme string, aka 'spacing.2',
    - An object with conditions, aka { default: 'spacing.2' }
    - A function returning a raw value, aka () => '3rem'
     */

    const normalizedInput = this.normalizeInputSignature(input)

    const compiledInput = {}

    Object.entries(normalizedInput).forEach(([condition, value]) => {
      compiledInput[condition] = this.interpreter(value, theme)
    })

    return compiledInput
  }
}

module.exports = PropertyInterpreter