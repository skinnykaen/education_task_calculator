import React from "react";
import { connect } from "react-redux";

import { HistoryContent, HistoryElement } from "./components";
import { clickHistoryElement } from '@/actions'

class HistoryContentWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    getItems(history) {
        return history.map((e, i) =>
            <HistoryElement id={i}
                key={String(i)}
                value={e}
                onClick={(event) => { clickHistoryElement(event.target.innerText) }}> {e}
            </HistoryElement >
        );
    }
    render() {
        return (
            <HistoryContent>{this.getItems(this.props.history)}</HistoryContent>
        )
    }
}
export default connect(state => ({ history: state.calculator.history }), { clickHistoryElement })(HistoryContentWrapper)