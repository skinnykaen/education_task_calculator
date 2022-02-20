import React from "react"
import { connect } from "react-redux"

import { ControlPanel } from "./components"
import { clickKeyClearHistory } from "@/actions"


class ControlPanelWrapper extends React.Component {
    render() {
        return (
            <ControlPanel onClick={() => { this.props.clickKeyClearHistory() }}>Clear History</ControlPanel>
        )
    }
}
export default connect(() => { }, { clickKeyClearHistory })(ControlPanelWrapper)