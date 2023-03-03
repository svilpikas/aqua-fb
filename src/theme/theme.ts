import * as utils from './utils'

const primary = {
  500: '#282c34',
}

const secondary = {
  500: '#61dafb',
}

const colors = {
  primary,
  secondary,
}

const spacings = {}

const fonts = {
  primary: 'SourceSansPro',
}

export const theme = {
  colors,
  spacings,
  fonts,

  getColor: utils.color,
  getFont: utils.font,
  getSpacing: utils.spacing,
  getProp: utils.prop,
}
