import React from "react";
import { Keypad, Row } from "./components";
import KeyButton from './KeyButton';

import { getExpression } from "@/reducers/calculator";

class KeypadWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Keypad>

                <Row>
                    <KeyButton value={'C'} />
                    <KeyButton value={7} />
                    <KeyButton value={8} />
                    <KeyButton value={9} />
                    <KeyButton value={'*'} />
                </Row>
                <Row>
                    <KeyButton value={'-'} />
                    <KeyButton value={4} />
                    <KeyButton value={5} />
                    <KeyButton value={6} />
                    <KeyButton value={'/'} />
                </Row>
                <Row>
                    <KeyButton value={'+'} />
                    <KeyButton value={1} />
                    <KeyButton value={2} />
                    <KeyButton value={3} />
                    <KeyButton value={'%'} />
                </Row>
                <Row>
                    <KeyButton value={'.'} />
                    <KeyButton value={'('} />
                    <KeyButton value={0} />
                    <KeyButton value={')'} />
                    <KeyButton value={'CE'} />
                </Row>
                <Row>
                    <KeyButton value={'='} />
                </Row>
            </Keypad >
        )
    }
}
export default KeypadWrapper;