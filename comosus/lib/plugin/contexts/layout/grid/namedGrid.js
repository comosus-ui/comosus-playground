const PropertyInterpreter = require('../../../../classes/PropertyInterpreter')

module.exports = new PropertyInterpreter('namedGrid', (input) => {
  // Get your examples robbed https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
  if(typeof input === 'function') input = input();

  const rows = input.template.slice(0, -1)
  const rowSizes = input.template.slice(-1)[0].join(' ')

  const maxItems = rows.reduce((acc, val) => {
    if (val.length > acc) acc = val.length
    return acc
  }, 0) - 1

  const expandRows = (row) => {
    while (row.length < maxItems) {
      row.push(row.slice(-1)[0])
    }
    return row.join(' ')
  }
  
  let template = ""
  for(let i = 0; i < rows.length; i++) {
    template += `"${expandRows(rows[i].slice(0, -1))}" ${rows[i].slice(-1)[0]} `
  }
  template += `/ ${rowSizes}`;

  const columnGap = input.columnGap || input.gap || 0
  const rowGap = input.rowGap || input.gap || 0
  
  return {
    'display': 'grid',
    'grid-template': template,
    'grid-gap': `${rowGap} ${columnGap}`
  }
})