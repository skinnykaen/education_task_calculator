import React from "react"

import HistoryContent from "./HistoryContent"

import { History } from "./components"

class HistoryWrapper extends React.Component {

    render() {
        return (
            <History >
                <h4>History</h4>
                <HistoryContent />
            </History >
        )
    }
}
export default HistoryWrapper