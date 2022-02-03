
import { func } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";


import { HistoryContent, HistoryElement } from "./components";
import { clickHistoryElement, getHistory } from '@/reducers/calculator'

export default (props) => {
    const dispath = useDispatch();
    let history = useSelector(state => getHistory(state.calculator))

    let items = history.map((e, i) =>
        <HistoryElement id={i}
            key={String(i)}
            value={e}
            onClick={(event) => { dispath(clickHistoryElement(event.target.innerText)) }}> {e}
        </HistoryElement >
    );

    return (
        <HistoryContent>{items}</HistoryContent>
    );
}