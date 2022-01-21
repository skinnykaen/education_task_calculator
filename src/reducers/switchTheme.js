import { createAction, handleActions } from 'redux-actions'

const INITIAL_STATE = {
    theme: 'light'
}

export const swithThemeAction = createAction('SWITCH_THEME');

export default handleActions({
    [swithThemeAction](state, action) {
        return { ...state, theme: action.payload };
    },


}, INITIAL_STATE)

export const getTheme = state => state.theme;