import React from "react";
import { useSelector } from "react-redux";

import { Display } from "./components";

export default (props) => {

    let expression = useSelector(state => state.calculator.expression)

    function showExpression(expression) {
        const MAX_LENGTH = 24;
        return (expression.length > MAX_LENGTH) ? expression.slice(expression.length - MAX_LENGTH) : expression;
    }

    return (
        <Display >
            {showExpression(expression) || '0'}
        </Display>
    )
}