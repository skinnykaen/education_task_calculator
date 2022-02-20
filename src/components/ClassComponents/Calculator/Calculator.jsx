import React from "react"

import Display from '@/components/ClassComponents/Display/Display'
import History from '@/components/ClassComponents/History'
import Keypad from '@/components/ClassComponents/Keypad'

import { Calculator } from "./components"
import { Flex } from "../Flex/components"

class CalculatorWrapper extends React.Component {
    render() {
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
}
export default CalculatorWrapper
