import React from "react"
import PropTypes from 'prop-types'

import { Flex } from "./components"

export default props => {

    return (
        <Flex {...props} />
    )
}

Flex.propTypes = {
    direction: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}