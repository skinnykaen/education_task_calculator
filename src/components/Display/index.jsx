import React from "react";

import { Display } from "./components";

export default (props) => {

    return (
        <Display {...props}>
            <input type="text" placeholder="1+1" />
        </Display>
    )
}