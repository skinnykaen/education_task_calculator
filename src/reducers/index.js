import { combineReducers } from 'redux'

import example from './example';
import switchTheme from './switchTheme';
import keypad from './keypad'

export const rootReducer = combineReducers({
  example,
  switchTheme,
  keypad,
})
