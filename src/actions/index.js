// @todo: add some actions
import { createAction } from 'redux-actions'

import {
    CLICK_KEY_BUTTON,
    CLICK_KEY_CLEAR,
    CLICK_KEY_CLEAR_HISTORY,
    CLICK_KEY_CLEAR_ENTRY,
    CLICK_HISTORY_ELEMENT,
    CLICK_RESULT_BUTTON,
    SWITCH_THEME
} from '@/constants/actions';

const makeExpression = expression => {
    try {
        return expression.replace(/\D\./, (s) => s.slice(0, 1) + '0.').replace('00.', '0.');
    } catch (e) {
        return '';
    }

}

const calculation = expression => {
    let result;
    try {
        result = (parseInt(eval(makeExpression(expression)) * 1000) / 1000).toString();
        isNaN(result) ? (result = '') : result;
    } catch (e) {
        console.log(e)
        result = '';
    }
    return {
        result,
    }
}


export const clickKeyButton = createAction(CLICK_KEY_BUTTON);
export const clickKeyClear = createAction(CLICK_KEY_CLEAR);
export const clickKeyClearHistory = createAction(CLICK_KEY_CLEAR_HISTORY);
export const clickKeyClearEntry = createAction(CLICK_KEY_CLEAR_ENTRY);
export const clickHistoryElement = createAction(CLICK_HISTORY_ELEMENT);
export const clickResultButton = createAction(CLICK_RESULT_BUTTON, calculation);
export const swithThemeAction = createAction(SWITCH_THEME);