import React from "react"

import Display from '@/components/FunctionalComponents/Display/Display'
import History from '@/components/FunctionalComponents/History'
import Keypad from '@/components/FunctionalComponents/Keypad'

import { Calculator } from "./components"
import { Flex } from "../Flex/components"

export default () => {

    return (
        <Calculator>
            <Flex direction="column" width="65%"
                margin="0 0 0 2%">
                <Display />
                <Keypad />
            </Flex>
            <History />
        </Calculator >
    )
}