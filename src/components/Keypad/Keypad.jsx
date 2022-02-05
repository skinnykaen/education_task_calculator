import React from "react";
import { useDispatch } from "react-redux";

import { Keypad, KeyButton, Row } from "./components";
import { clickKeyButton, clickKeyClear, clickKeyClearEntry, clickResultButton } from '@/reducers/calculator'

export default (props) => {

    const dispatch = useDispatch();

    function keyButtonHandler(v) {
        dispatch(clickKeyButton(v))
    }

    return (
        <Keypad>
            <Row>
                <KeyButton onClick={() => { dispatch(clickKeyClear()) }}>C</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(7) }}>7</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(8) }}>8</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(9) }}>9</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler('*') }}>*</KeyButton>
            </Row>
            <Row>
                <KeyButton onClick={() => { keyButtonHandler('-') }}>-</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(4) }}>4</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(5) }}>5</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(6) }}>6</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler('/') }}>/</KeyButton>
            </Row>
            <Row>
                <KeyButton onClick={() => { keyButtonHandler('+') }}>+</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(1) }}>1</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(2) }}>2</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(3) }}>3</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler('%') }}>%</KeyButton>
            </Row>
            <Row>
                <KeyButton onClick={() => { keyButtonHandler('.') }}>.</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler('(') }}>(</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(0) }}>0</KeyButton>
                <KeyButton onClick={() => { keyButtonHandler(')') }}>)</KeyButton>
                <KeyButton onClick={() => { dispatch(clickKeyClearEntry()) }} > CE </KeyButton>
            </Row>
            <Row>
                <KeyButton onClick={() => { dispatch(clickResultButton()) }}>=</KeyButton>
            </Row>

        </Keypad >
    )
}