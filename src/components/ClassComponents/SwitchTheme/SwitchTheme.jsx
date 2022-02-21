import React from "react"
import { connect } from "react-redux"

import {
    Title,
    DropDownContainer,
    DropDownList,
    DropDownListContainer,
    ListItem,
    DropDownHeader,
} from "./components"

import { getCurrentTheme, getThemeItems } from '@/reducers/switchTheme'
import { swithThemeAction } from '@/actions'


class SwitchThemeWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    handleToggling = () => this.setState(!this.state.isOpen)

    render() {
        return (
            <React.Fragment>
                <Title>Switch Theme</Title>
                <DropDownContainer data-cy={'DropDownContainer'}>
                    <DropDownHeader onClick={this.handleToggling}>{this.props.currentTheme} theme</DropDownHeader>
                    {this.state.isOpen && (
                        <DropDownListContainer >
                            <DropDownList data-cy={'DropDownList'}>
                                {this.props.themeItems.map((theme, i) => {
                                    if (this.props.currentTheme !== theme)
                                        return <ListItem data-cy={'ListItem'} onClick={() => { this.props.swithThemeAction(theme) }} key={theme}>{theme} theme</ListItem>
                                })}
                            </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>
            </React.Fragment>
        )
    }
}

export default connect(state => ({ currentTheme: getCurrentTheme(state.switchTheme), themeItems: getThemeItems(state.switchTheme) }), {
    swithThemeAction,
})(SwitchThemeWrapper)