import React from 'react'
import PropTypes from 'prop-types'

const Conduct = React.createContext({ state: {} })
export const ConductConsumer = Conduct.Consumer
ConductConsumer.displayName = 'Conduct'

export class ConductProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.initialState || {}
        this.update = this.update.bind(this)
    }

    update(state) {
        this.setState(state)
    }

    render() {
        return <Conduct.Provider value={{ state: this.state, setState: this.update }} {...this.props} />
    }
}

ConductProvider.propTypes = {
    initialState: PropTypes.object
}
