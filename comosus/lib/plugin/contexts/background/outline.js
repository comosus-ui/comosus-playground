const PropertyInterpreter = require('../../../classes/PropertyInterpreter')
const GetThemeValue = require('../../../util/GetThemeValue')

const widths = ['thin', 'medium', 'thick', '0']
const absoluteUnits = ['cm', 'mm', 'in', 'px', 'pt', 'pc']
const relativeUnits = ['em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', '%']
const units = [...absoluteUnits, ...relativeUnits]
// required
const styles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden']

module.exports = new PropertyInterpreter('outline', (input, theme) => {
  if(typeof input === 'string') {
    return { outline: GetThemeValue(theme, input) }
  }

  if(typeof input === 'function') input = input();

  const fields = input.outline.split(/\s+/)
  const res = {
    width: 'unset',
    color: 'unset',
    style: 'unset'
  }

  fields.forEach(field => {
    // outline-width checks
    if(widths.includes(field)) {
      res.width = field
    } else if (units.some(e => field.endsWith(e)) && parseFloat(field)) {
      res.width = field
    }
    // outline-style checks
    else if(styles.includes(field)) {
      res.style = field
    }
    // outline-color as default?
    else {
      res.color = field
    }
  });


  return {
    'outline': `${res.width} ${res.style} ${res.color}`,
    'outline-offset': input.offset || 'unset',
  }
})