import React from "react";

import Display from '@/components/Display';
import History from '@/components/History';
import Keypad from '@/components/Keypad';

import { Calculator, Section } from "./components";
import { Flex } from "../Flex/components";

export default (props) => {

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