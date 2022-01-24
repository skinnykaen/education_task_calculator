import React from "react";

import HistoryContent from "./HistoryContent"

import { History } from "./components";

export default (props) => {

    return (
        <History {...props}>
            <h4>History</h4>
            <HistoryContent {...props}></HistoryContent>
        </History >
    )
}