import { createAction, handleActions } from 'redux-actions'

const INITIAL_STATE = {
    expression: ''
}

export const clickKeyButton = createAction('CLICK_KEY_BUTTON');
export const clickKeyClear = createAction('CLICK_KEY_CLEAR');
export const clickKeyClearEntry = createAction('CLICK_KEY_CLEAR_ENTRY');

export default handleActions({
    [clickKeyButton](state, action) {
        return { ...state, expression: state.expression + action.payload };
    },
    [clickKeyClearEntry](state) {
        return { ...state, expression: '' };
    },


}, INITIAL_STATE)

export const getExpression = state => state.expression;