import { createAction, handleActions } from 'redux-actions'

import { SWITCH_THEME } from '@/constants/actions'
import { swithThemeAction } from '@/actions'
const INITIAL_STATE = {
    currentTheme: 'Light',
    themeItems: ['Light', 'Dark', 'Colored'],
}

export default handleActions({
    [swithThemeAction](state, action) {
        return { ...state, currentTheme: action.payload };
    },
}, INITIAL_STATE)

export const getCurrentTheme = state => state.currentTheme;
export const getThemeItems = state => state.themeItems;