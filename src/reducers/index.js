import { combineReducers } from 'redux'

import example from './example';
import switchTheme from './switchTheme';
import calculator from './calculator'

export const rootReducer = combineReducers({
  example,
  switchTheme,
  calculator,
})
