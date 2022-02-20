import { handleActions } from 'redux-actions'

import {
    clickKeyButton,
    clickKeyClearEntry,
    clickKeyClear,
    clickHistoryElement,
    clickResultButton,
    clickKeyClearHistory,
} from '@/actions'

const INITIAL_STATE = {
    expression: '',
    history: [],
}

export default handleActions({
    [clickKeyButton](state, action) {
        return { ...state, expression: state.expression + action.payload }
    },
    [clickKeyClearEntry](state) {
        return { ...state, expression: state.expression.slice(0, -1) }
    },
    [clickKeyClear](state) {
        return { ...state, expression: '' }
    },
    [clickHistoryElement](state, action) {
        return { ...state, expression: action.payload }
    },
    [clickResultButton](state, action) {
        return { ...state, history: [...state.history, state.expression ? state.expression : '0'], expression: action.payload.result }
    },
    [clickKeyClearHistory](state) {
        return { ...state, history: [] }
    },
}, INITIAL_STATE)

export const getExpression = state => state.expression
export const getHistory = state => state.history
export const getError = state => state.error