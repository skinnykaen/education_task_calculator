import React from "react";

import { SwitchTheme, Title } from "./components";

function getValue() {
    return document.getElementById('theme_switcher').value;
}


export default (props) => {

    return (
        <SwitchTheme {...props}>
            <Title>Switch theme</Title>
            <select id='theme_switcher' onClick={() => { props.swithThemeAction(getValue()) }}>
                <option value='light'>Light theme</option>
                <option value='colored'>Colored theme</option>
                <option value='dark'>Dark theme</option>
            </select>
        </SwitchTheme >
    )
}
