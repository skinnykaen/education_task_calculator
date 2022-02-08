import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
    SwitchTheme,
    Title,
    DropDownContainer,
    DropDownList,
    DropDownListContainer,
    ListItem,
    DropDownHeader
} from "./components";
import { getCurrentTheme, getThemeItems } from '@/reducers/switchTheme'
import { swithThemeAction } from '@/actions'
import { useSelector } from "react-redux";

function getValue() {
    return document.getElementById('theme_switcher').value;
}


export default (props) => {

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const currentTheme = useSelector(state => getCurrentTheme(state.switchTheme));
    let themeItems = useSelector(state => getThemeItems(state.switchTheme));

    function switchThemeHandler(v) {
        dispatch(swithThemeAction(v))
    }

    return (
        <>
            <Title>Switch Theme</Title>
            <DropDownContainer>
                <DropDownHeader onClick={toggling}>{currentTheme + ' theme'}</DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {themeItems.map((e, i) => {
                                if (currentTheme !== e) return <ListItem onClick={() => { switchThemeHandler(e) }} key={i}>{e + ' theme'}</ListItem>
                            })}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </>
    )
}
