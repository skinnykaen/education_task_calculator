import React from "react";
import { connect } from "react-redux";

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
import { swithThemeAction } from '@/actions';


class SwitchThemeWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

    }
    getValue() {
        return document.getElementById('theme_switcher').value;
    }

    switchThemeHandler(v) {
        this.props.swithThemeAction(v)
    }
    render() {
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
}
export default connect(state => ({ theme: getCurrentTheme(state.switchTheme), themeItems: getThemeItems(state.switchTheme) }), {
    swithThemeAction
})(SwitchThemeWrapper)