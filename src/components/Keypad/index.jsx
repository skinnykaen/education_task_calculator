import React from "react";

import { Keypad, KeyButton, Row } from "./components";

export default (props) => {

    return (
        <Keypad {...props}>
            <Row>
                <KeyButton {...props} onClick={() => { props.clickKeyClear() }}>C</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(7) }}>7</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(8) }}>8</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(9) }}>9</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton('*') }}>*</KeyButton>
            </Row>
            <Row>
                <KeyButton {...props} onClick={() => { props.clickKeyButton('-') }}>-</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(4) }}>4</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(5) }}>5</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(6) }}>6</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton('\\') }}>\</KeyButton>
            </Row>
            <Row>
                <KeyButton {...props} onClick={() => { props.clickKeyButton('+') }}>+</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(1) }}>1</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(2) }}>2</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(3) }}>3</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickResultButton() }}>=</KeyButton>
            </Row>
            <Row>
                <KeyButton {...props} onClick={() => { props.clickKeyButton('.') }}>.</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton('(') }}>(</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(0) }}>0</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyButton(')') }}>)</KeyButton>
                <KeyButton {...props} onClick={() => { props.clickKeyClearEntry() }} > CE </KeyButton>
            </Row>
        </Keypad >
    )
}