import React from "react";

import Display from '@/components/Display/Display';
import History from '@/components/History';
import Keypad from '@/components/Keypad';

import { Calculator, Section } from "./components";
import { Flex } from "../Flex/components";
import { connect } from "react-redux";

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

// to do refactor structure, arrow