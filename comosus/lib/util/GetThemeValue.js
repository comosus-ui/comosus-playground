module.exports = (theme, path) => path.split(/\./).reduce((out, part) => out[part], theme)