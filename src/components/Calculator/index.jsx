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

export default (props) => {

    return (
        <Calculator>
            <Flex direction='column' width='65%' margin='0 0 0 2%'>
                <Display></Display>
                <Keypad></Keypad>
            </Flex>

            <History></History>

        </Calculator >
    )
}

// to do test, clear history, select