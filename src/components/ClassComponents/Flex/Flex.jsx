import React from "react";

import { Flex } from "./components";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Flex {...this.props}></Flex>
        )
    }
}