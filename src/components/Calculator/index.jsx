import React from "react";

import Display from '@/components/Display';
import History from '@/components/History';
import Keypad from '@/components/Keypad'

import { Calculator, Section } from "./components";

export default () => {

    return (
        <Calculator>
            <Section>
                <Display></Display>
                <Keypad></Keypad>
            </Section>
            <History></History>
        </Calculator >
    )
}