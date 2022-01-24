import { createAction, handleActions } from 'redux-actions'

const INITIAL_STATE = {
    expression: '',
    history: ['1+1', '5/2', '5*4'],
}

export const clickKeyButton = createAction('CLICK_KEY_BUTTON');
export const clickKeyClear = createAction('CLICK_KEY_CLEAR');
export const clickKeyClearEntry = createAction('CLICK_KEY_CLEAR_ENTRY');
export const clickHistoryElement = createAction('CLICK_HISTORY_ELEMENT');
export const clickResultButton = createAction('CLICK_RESULT_BUTTON');


export default handleActions({
    [clickKeyButton](state, action) {
        return { ...state, expression: state.expression + action.payload };
    },
    [clickKeyClearEntry](state) {
        return { ...state, expression: '' };
    },
    [clickKeyClear](state) {
        return { ...state, expression: '', history: [] };
    },
    [clickHistoryElement](state, action) {
        return { ...state, expression: action.payload };
    },
    [clickResultButton](state) {
        return { ...state, history: [...state.history, state.expression] }
    }


}, INITIAL_STATE)

export const getExpression = state => state.expression;
export const getHistory = state => state.history;

let operators = new Map([
    ['+', 0],
    ['-', 0],
    ['*', 1],
    ['\\', 1],
    ['(', 2],
    [')', 2],
]);

function calculation(expression) {

}

function toRPN(expression) {
    let result = [];
    let stack = [];

    expression.split('').forEach(e => {
        if (operators.has(e)) {
            if (e === ')') {

            }
            stack.push(e);
        } else {
            result.push(e);
        }
    });

    return result.join('');
}