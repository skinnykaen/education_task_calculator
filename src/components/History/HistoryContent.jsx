
import { func } from "prop-types";
import React from "react";


import { HistoryContent, HistoryElement } from "./components";

export default (props) => {
    let items = props.history.map((e, i) =>
        <HistoryElement id={i}
            key={String(i)}
            value={e} {...props}
            onClick={(event) => { props.clickHistoryElement(event.target.innerText) }}> {e}
        </HistoryElement >
    );

    return (
        <HistoryContent {...props}>{items}</HistoryContent>
    );
}