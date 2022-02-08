import React from "react";
import { connect } from "react-redux";

import { Display } from "./components";

class DisplayWrapper extends React.Component {
    showExpression(expression) {
        const MAX_LENGTH = 24;
        return (expression.length > MAX_LENGTH) ? expression.slice(expression.length - MAX_LENGTH) : expression;
    }
    render() {
        return (
            <Display >
                {this.showExpression(this.props.expression) || '0'}
            </Display>
        )
    }
}
export default connect(state => ({ expression: state.calculator.expression }), {})(DisplayWrapper)