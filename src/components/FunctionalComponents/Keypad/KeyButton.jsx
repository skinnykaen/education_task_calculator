import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { KeyButton } from './components';
import { clickKeyButton, clickKeyClear, clickKeyClearEntry, clickResultButton } from '@/actions';
import { getExpression } from "@/reducers/calculator";


export default ({ value }) => {
    const dispatch = useDispatch();
    const expr = useSelector(state => getExpression(state.calculator));

    function keyButtonHandler(value) {
        switch (value) {
            case 'CE':
                dispatch(clickKeyClearEntry())
                break;
            case 'C':
                dispatch(clickKeyClear())
                break;
            case '=':
                dispatch(clickResultButton(expr))
                break;
            default:
                dispatch(clickKeyButton(value))
        }
    }
    return (
        <KeyButton onClick={() => { keyButtonHandler(value) }}>{value}</KeyButton>
    )
}
