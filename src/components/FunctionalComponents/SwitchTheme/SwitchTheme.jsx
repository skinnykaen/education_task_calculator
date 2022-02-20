import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

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


export default props => {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const toggling = () => setIsOpen(!isOpen)

    const currentTheme = useSelector(state => getCurrentTheme(state.switchTheme))
    const themeItems = useSelector(state => getThemeItems(state.switchTheme))

    return (
        <React.Fragment>
            <Title>Switch Theme</Title>
            <DropDownContainer data-cy={'DropDownContainer'}>
                <DropDownHeader onClick={toggling}>{currentTheme} theme</DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList data-cy={'DropDownList'}>
                            {themeItems.map((theme, i) => {
                                if (currentTheme !== theme)
                                    return <ListItem data-cy={'ListItem'} onClick={() => { dispatch(swithThemeAction(theme)) }} key={i}>{theme} theme</ListItem>
                            })}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </React.Fragment>
    )
}
