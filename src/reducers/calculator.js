import { createAction, handleActions } from 'redux-actions'

const INITIAL_STATE = {
    expression: '',
    history: [],
    error: '',
}

export const clickKeyButton = createAction('CLICK_KEY_BUTTON');
export const clickKeyClear = createAction('CLICK_KEY_CLEAR');
export const clickKeyClearHistory = createAction('CLICK_KEY_CLEAR_HISTORY');
export const clickKeyClearEntry = createAction('CLICK_KEY_CLEAR_ENTRY');
export const clickHistoryElement = createAction('CLICK_HISTORY_ELEMENT');
export const clickResultButton = createAction('CLICK_RESULT_BUTTON');
export const throwError = createAction('THROW_ERROR');


/// ??? 
function makeExpression(expression) {
    try {
        return expression.replace(/\D\./, (s) => s.slice(0, 1) + '0.').replace('00.', '0.').replace('\\', '/');
    } catch (e) {
        return '';
    }

}

function calculation(expression) {
    try {
        let result = (parseInt(eval(makeExpression(expression)) * 1000) / 1000).toString();
        return isNaN(result) ? '' : result;
    } catch (e) {
        return '';
    }
}

export default handleActions({
    [clickKeyButton](state, action) {
        return { ...state, expression: state.expression + action.payload };
    },
    [clickKeyClearEntry](state) {
        return { ...state, expression: state.expression.slice(0, -1) };
    },
    [clickKeyClear](state) {
        return { ...state, expression: '' };
    },
    [clickHistoryElement](state, action) {
        return { ...state, expression: action.payload };
    },
    [clickResultButton](state) {
        return { ...state, history: [...state.history, state.expression ? state.expression : '0'], expression: calculation(state.expression) }
    },
    [throwError](state, action) {
        return { ...state, error: action.payload }
    },
    [clickKeyClearHistory](state) {
        return { ...state, history: [] }
    }


}, INITIAL_STATE)

export const getExpression = state => state.expression;
export const getHistory = state => state.history;
export const getError = state => state.error;