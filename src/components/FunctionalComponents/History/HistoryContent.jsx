
import PropTypes from "prop-types"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { HistoryContent, HistoryElement } from "./components"
import { clickHistoryElement } from '@/actions'

export default () => {
    const dispath = useDispatch()
    const history = useSelector(state => state.calculator.history)

    const items = history.map((expression, i) =>
        <HistoryElement id={i}
            key={String(i)}
            value={expression}
            onClick={() => { dispath(clickHistoryElement(expression)) }}> {expression}
        </HistoryElement >,
    )

    return (
        <HistoryContent>{items}</HistoryContent>
    )
}

HistoryElement.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
}