import React from "react";

import { Display } from "./components";

export default (props) => {

    function showExpression(expression) {
        const MAX_LENGTH = 24;
        return (expression.length > MAX_LENGTH) ? expression.slice(expression.length - MAX_LENGTH) : expression;
    }

    return (
        <Display {...props}>
            {showExpression(props.expression) || '0'}
        </Display>
    )
}