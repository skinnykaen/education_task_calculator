import React from "react";

import { Display } from "./components";

export default (props) => {

    function showExpression(expression) {
        const MAX_LENGTH = 27;
        // console.log(expression.slice(Math.trunc(expression.length / MAX_LENGTH) * MAX_LENGTH))
        return expression.slice(Math.trunc(expression.length / MAX_LENGTH) * MAX_LENGTH)
    }

    return (
        <Display {...props}>
            {showExpression(props.expression) || '0'}
        </Display>
    )
}