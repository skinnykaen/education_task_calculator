import { combineReducers } from 'redux'

import switchTheme from './switchTheme'
import calculator from './calculator'

export const rootReducer = combineReducers({
  switchTheme,
  calculator,
})
