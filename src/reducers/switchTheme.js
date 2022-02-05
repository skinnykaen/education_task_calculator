import { createAction, handleActions } from 'redux-actions'

const INITIAL_STATE = {
    currentTheme: 'Light',
    themeItems: ['Light', 'Dark', 'Colored'],
}

export const swithThemeAction = createAction('SWITCH_THEME');

export default handleActions({
    [swithThemeAction](state, action) {
        return { ...state, currentTheme: action.payload };
    },
}, INITIAL_STATE)

export const getCurrentTheme = state => state.currentTheme;
export const getThemeItems = state => state.themeItems;