
module.exports = {
  name: 'theme',
  colors: {
    blue: {
      '00': '#EBF8FF',
      '10': '#D1EEFC',
      '20': '#A7D8F0',
      '30': '#7CC1E4',
      '40': '#55AAD4',
      '50': '#3994C1',
      '60': '#2D83AE',
      '70': '#1D6F98',
      '80': '#166086',
      '90': '#0B4F71',
    },
    grey: {
      '00': '#F0F4F8',
      '10': '#D9E2EC',
      '20': '#BCCCDC',
      '30': '#9FB3C8',
      '40': '#829AB1',
      '50': '#627D98',
      '60': '#486581',
      '70': '#334E68',
      '80': '#243B53',
      '90': '#102A43',
    }
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
  },
  leading: {
    none: 1,
    normal: 'normal',
    relaxed: 1.375,
    loose: 2
  },
  spacing: {
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem'
  },
  shadow: {
    '1': '0 1px 3px -1px rgba(0,0,0,0.4)',
    '2': '0 2px 7px -3px rgba(0,0,0,0.4)'
  },
  // would it be worth providing these type of things by default?
  cursor: {
    pointer: 'pointer',
    default: 'default',
    grab: 'grab',
    none: 'none',
  },
  outline: {
    none: 'none',
  },
  textTransform: {
    none: 'none',
    capitalize: 'capitalize',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
  }
}
