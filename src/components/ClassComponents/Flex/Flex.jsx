import React from "react";

import { Flex } from "./components";


class FlexWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Flex {...this.props}></Flex>
        )
    }
}

export default FlexWrapper