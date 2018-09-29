import React from 'react'
import PropTypes from 'prop-types'
import { ConductProvider } from '../conduct'
import reduce from './reduce'

const ConduxProvider = ({ reducers, middleware, ...props }) => (
    <ConductProvider initialState={{ ...reduce(reducers), reducers, middleware }} {...props} />
)

ConduxProvider.propTypes = {
    reducers: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]),
    middleware: PropTypes.func
}

ConduxProvider.defaultProps = {
    middleware: state => state
}

export default ConduxProvider
