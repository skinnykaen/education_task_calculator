import React from "react";
import { connect } from "react-redux";
import { Keypad, KeyButton, Row } from "./components";
import { clickKeyButton, clickKeyClear, clickKeyClearEntry, clickResultButton } from '@/actions'

import { getExpression } from "@/reducers/calculator";

class KeypadWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    keyButtonHandler(v) {
        this.props.clickKeyButton(v)
    }
    render() {
        return (
            <Keypad>
                <Row>
                    <KeyButton onClick={() => { this.props.clickKeyClear() }}>C</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(7) }}>7</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(8) }}>8</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(9) }}>9</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler('*') }}>*</KeyButton>
                </Row>
                <Row>
                    <KeyButton onClick={() => { this.keyButtonHandler('-') }}>-</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(4) }}>4</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(5) }}>5</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(6) }}>6</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler('/') }}>/</KeyButton>
                </Row>
                <Row>
                    <KeyButton onClick={() => { this.keyButtonHandler('+') }}>+</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(1) }}>1</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(2) }}>2</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(3) }}>3</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler('%') }}>%</KeyButton>
                </Row>
                <Row>
                    <KeyButton onClick={() => { this.keyButtonHandler('.') }}>.</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler('(') }}>(</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(0) }}>0</KeyButton>
                    <KeyButton onClick={() => { this.keyButtonHandler(')') }}>)</KeyButton>
                    <KeyButton onClick={() => { this.props.clickKeyClearEntry() }} > CE </KeyButton>
                </Row>
                <Row>
                    <KeyButton onClick={() => { this.props.clickResultButton(this.props.expression) }}>=</KeyButton>
                </Row>

            </Keypad >
        )
    }
}
export default connect(state => ({ expression: getExpression(state.calculator) }), { clickKeyButton, clickKeyClear, clickKeyClearEntry, clickResultButton })(KeypadWrapper)