import { css } from 'styled-components'

const font = 'sans-serif'

// Color palette
const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
  },
  light: {
    background: 'white',
    textColor: 'black',
    headingColor: 'grey',
    headingTextColor: 'lightgrey',
    headingActiveTextColor: 'white',
    border: 'grey',
  },
  dark: {
    background: 'grey',
    textColor: 'white',
    headingColor: 'dimgrey',
    headingTextColor: 'silver',
    headingActiveTextColor: 'white',
    border: 'black',
  },
  colored: {
    background: 'peachpuff',
    textColor: 'black',
    headingColor: 'sienna',
    headingTextColor: 'bisque',
    headingActiveTextColor: 'white',
    border: 'sienna',
  }
}


// ??? здесь ли описывать темы

export const lightTheme = {
  background: 'white',
  textColor: 'black',
  headingColor: 'grey',
  headingTextColor: 'lightgrey',
  headingActiveTextColor: 'white',
}

export const darkTheme = {
  background: 'grey',
  textColor: 'white',
  headingColor: 'dimgrey',
  headingTextColor: 'silver',
  headingActiveTextColor: 'white',
}

export const coloredTheme = {
  background: 'peachpuff',
  textColor: 'black',
  headingColor: 'tan',
  headingTextColor: 'silver',
  headingActiveTextColor: 'black',
}
