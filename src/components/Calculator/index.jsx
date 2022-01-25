import React from "react";

import Display from '@/components/Display';
import History from '@/components/History';
import Keypad from '@/components/Keypad';

import { Calculator, Section } from "./components";
import { Flex } from "../Flex/components";
import { connect } from "react-redux";

import {
    getExpression,
    clickKeyButton,
    clickKeyClearEntry,
    clickKeyClear,
    clickHistoryElement,
    clickResultButton,
    getHistory,
} from '@/reducers/calculator';

const Wrapper = (props) => {

    return (
        <Calculator {...props}>
            <Flex direction='column' width='65%' margin='0 0 0 2%'>
                <Display {...props}></Display>
                <Keypad {...props}></Keypad>
            </Flex>

            <History {...props}></History>

        </Calculator >
    )
}

let mapStateToProps = (state) => ({
    expression: getExpression(state.calculator),
    history: getHistory(state.calculator),

});

export default connect(mapStateToProps, { clickKeyButton, clickKeyClearEntry, clickKeyClear, clickHistoryElement, clickResultButton })(Wrapper);