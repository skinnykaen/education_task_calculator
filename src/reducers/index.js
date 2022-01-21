import { combineReducers } from 'redux'

import example from './example';
import switchTheme from './switchTheme';

export const rootReducer = combineReducers({
  example,
  switchTheme,
})
