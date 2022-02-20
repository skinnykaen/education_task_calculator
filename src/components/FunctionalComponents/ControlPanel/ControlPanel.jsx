import React from "react"
import { useDispatch } from "react-redux"

import { ControlPanel } from "./components"
import { clickKeyClearHistory } from '@/actions'

export default () => {
    const dispatch = useDispatch()

    return (
        <ControlPanel onClick={() => { dispatch(clickKeyClearHistory()) }}>Clear History</ControlPanel>
    )
}