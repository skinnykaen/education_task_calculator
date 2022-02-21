import React from "react"
import PropTypes from 'prop-types'

import { Flex } from "./components"

export default class extends React.Component {
    render() {
        return (
            <Flex {...this.props} />
        )
    }
}

Flex.propTypes = {
    direction: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}