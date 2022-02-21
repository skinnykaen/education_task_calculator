import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { HistoryContent, HistoryElement } from "./components"
import { clickHistoryElement } from '@/actions'

class HistoryContentWrapper extends React.Component {
    getItems(history) {
        return history.map((expression, i) =>
            <HistoryElement id={i}
                key={String(i)}
                value={expression}
                data-cy={'HistoryElement'}
                onClick={() => { clickHistoryElement(expression) }}> {expression}
            </HistoryElement >,
        )
    }

    render() {
        return (
            <HistoryContent>{this.getItems(this.props.history)}</HistoryContent>
        )
    }
}

HistoryElement.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
}

export default connect(state => ({ history: state.calculator.history }), { clickHistoryElement })(HistoryContentWrapper)