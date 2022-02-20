import React from 'react';
import { connect } from 'react-redux'

import { KeyButton } from './components'
import { clickKeyButton, clickKeyClear, clickKeyClearEntry, clickResultButton } from '@/actions'
import { getExpression } from "@/reducers/calculator"


class KeyButtonWrapper extends React.Component {
    keyButtonHandler(value) {
        switch (value) {
            case 'CE':
                this.props.clickKeyClearEntry()
                break
            case 'C':
                this.props.clickKeyClear()
                break
            case '=':
                this.props.clickResultButton(this.props.expression)
                break
            default:
                this.props.clickKeyButton(value)
        }
    }

    render() {
        return (
            <KeyButton data-cy={'KeyButton'} onClick={() => { this.keyButtonHandler(this.props.value) }}>{this.props.value}</KeyButton>
        )
    }
}

export default connect(state => ({ expression: getExpression(state.calculator) }),
    { clickKeyButton, clickKeyClear, clickKeyClearEntry, clickResultButton })
    (KeyButtonWrapper)