import React from "react";
import { useDispatch } from "react-redux";

import { SwitchTheme, Title } from "./components";
import { swithThemeAction } from '@/reducers/switchTheme'

function getValue() {
    return document.getElementById('theme_switcher').value;
}


export default (props) => {

    const dispatch = useDispatch();

    return (
        <SwitchTheme>
            <Title>Switch theme</Title>
            <select id='theme_switcher' onClick={() => { dispatch(swithThemeAction(getValue())) }}>
                <option value='light'>Light theme</option>
                <option value='colored'>Colored theme</option>
                <option value='dark'>Dark theme</option>
            </select>
        </SwitchTheme >
    )
}
