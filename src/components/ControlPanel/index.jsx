import React from "react";
import { useDispatch } from "react-redux";

import { ControlPanel } from "./components";
import { clickKeyClearHistory } from '@/reducers/calculator';

export default (props) => {
    const dispatch = useDispatch();

    return (
        <ControlPanel onClick={() => { dispatch(clickKeyClearHistory()) }}>Clear History</ControlPanel>
    )
}