class Condition {
  constructor(name, code, transformFunction, priority = 1) {
    this.name = name
    this.code = code
    this.transformFunction = transformFunction
    this.priority = priority
  }

  transform(selector) {
    return this.transformFunction(selector)
  }
}

module.exports = Condition