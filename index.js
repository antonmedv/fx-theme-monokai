const chalk = require('chalk')
const noop = x => x

global.FX_STYLE_NULL    = chalk.grey
global.FX_STYLE_NUMBER  = chalk.green.bold
global.FX_STYLE_BOOLEAN = chalk.red.bold
global.FX_STYLE_STRING  = chalk.yellow.bold
global.FX_STYLE_KEY     = chalk.magenta
global.FX_STYLE_BRACKET = chalk.white.bold
global.FX_STYLE_COMMA   = noop
global.FX_STYLE_COLON   = noop
global.FX_STYLE_LIST    = {
  fg: 'white',
  bg: 'red',
  selected: {
    fg: 'black',
    bg: 'yellow',
  }
}