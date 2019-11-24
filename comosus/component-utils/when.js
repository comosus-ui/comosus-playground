module.exports = (...conditions) =>
  conditions.map(
    condition => (
      Array.isArray(condition) ? condition : [condition]
    ).map(cond => cond.code).join('')
  ).join('-')