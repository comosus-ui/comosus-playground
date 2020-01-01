const { when } = require('./comosus/component-utils')
const { Hover, Active, DarkMode } = require('./comosus/conditions')

const Button = {
  docs: {
    description: `It's just a button!`,
    content: "lorem-5"
  },
  base: {
    layout: {
      // feels not great, shouldnt have more than one thing
      column: {
        default: {
          // placement: 'start',
          mainAxis: 'between',
          crossAxis: 'end'
        }
      }
    },
    content: {
      fontWeight: 'fontWeight.semibold',
      fontFamily: () => 'sans-serif',
      truncate: true
    },
    background: {
      shadow: {
        default: 'shadow.1',
        [when(Hover)]: 'shadow.2'
      },
    },
    placement: {
      padding: {
        default: {
          x: 'spacing.3',
          y: 'spacing.2'
        }
      }
    }
  },
  variants: {
    primary: {
      content: {
        color: {
          default: 'colors.blue.90',
          [when(Hover)]: 'colors.blue.80',
          [when(DarkMode)]: 'colors.blue.00',
          [when([DarkMode, Hover])]: 'colors.blue.10',
        }
      },
      background: {
        color: {
          default: 'colors.blue.10',
          [when(Hover)]: 'colors.blue.20',
          [when(Active)]: 'colors.blue.10',
          [when(DarkMode, [DarkMode, Active])]: 'colors.blue.50',
          [when([DarkMode, Hover])]: 'colors.blue.60',
        }
      }
    },
    secondary: {
      layout: {
        // feels not great, shouldnt have more than one thing
        column: {
          default: {
            placement: 'start',
          }
        }
      },
      background: {
        color: {
          default: 'colors.blue.90',
          [when(Hover)]: 'colors.blue.80',
          [when(DarkMode)]: 'colors.blue.00',
          [when([DarkMode, Hover])]: 'colors.blue.10',
        }
      },
      content: {
        color: {
          default: 'colors.blue.10',
          [when(Hover)]: 'colors.blue.20',
          [when(Active)]: 'colors.blue.10',
          [when(DarkMode, [DarkMode, Active])]: 'colors.blue.50',
          [when([DarkMode, Hover])]: 'colors.blue.60',
        }
      }
    }
  }
}


const Grid = {
  docs: {
    description: `Some auto-grid!`,
    content: [11, "lorem-12"]
  },
  base: {
    layout: {
      autoGrid: {
        default: {
          columns: '3',
          placement: 'fill',
          gap: '10px'
        }
      }
    }
  }
}

const Layout = {
  docs: {
    description: `A _simple_ page layout with a header, footer, nav, and main section`,
    content: [8, "lorem-3"]
  },
  base: {
    layout: {
      namedGrid: {
        default: {
          columnGap: '10px',
          template: [
            ['head', '30px'],
            ['nav', 'main', '1fr'],
            ['nav', 'foot', '20px'],
            ['120px', '1fr']
          ]
        }
      }
    }
  }
}

module.exports = {
  Button,
  Grid,
  Layout
}
