const PropertyInterpreter = require('../../../../classes/PropertyInterpreter')

module.exports = new PropertyInterpreter('autoGrid', (input) => {

  const placements = ['fit', 'fill']
  
  const hasColumnPlacement = placements.includes(input.columnPlacement)
  const hasRowPlacement = placements.includes(input.rowPlacement)
  const defaultPlacement = placements.includes(input.placement) ? `auto-${input.placement}` : 'auto-fit'

  const columnPlacement = hasColumnPlacement ? `auto-${input.columnPlacement}` : defaultPlacement;
  const rowPlacement = hasRowPlacement ? `auto-${input.rowPlacement}` : defaultPlacement;

  const columnCount = Number.isNaN(Number(input.columns)) ? columnPlacement : input.columns;
  const rowCount = Number.isNaN(Number(input.rows)) ? rowPlacement : input.rows;
  
  const columnGap = input.columnGap || input.gap || 0
  const rowGap = input.rowGap || input.gap || 0
  
  const columnSize = input.columnSize || '1fr'
  const rowSize = input.rowSize || '1fr'
  
  // think the move could be the css vars so people could inject it
  return {
    '--comosus-column-count': columnCount,
    '--comosus-row-count': rowCount,
    'display': 'grid',
    'grid-template-columns': `repeat(var(--comosus-column-count), ${columnSize})`,
    'grid-template-rows': `repeat(var(--comosus-row-count), ${rowSize})`,
    'grid-gap': `${rowGap} ${columnGap}`
  }
})