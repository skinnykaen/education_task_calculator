import React from "react";

import HistoryContent from "./HistoryContent";
import ControlPanel from "@/components/ControlPanel";

import { History } from "./components";

export default (props) => {

    return (
        <History >
            <h4>History</h4>
            <HistoryContent></HistoryContent>
            <ControlPanel />
        </History >
    )
}