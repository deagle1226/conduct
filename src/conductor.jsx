import React from 'react'
import isEqual from 'lodash/isEqual'

class Conductor extends React.Component {

    shouldComponentUpdate(nextProps) {
        return !isEqual(nextProps.mapStateToProps(nextProps.state), this.props.mapStateToProps(this.props.state))
    }

    render() {
        const { state, setState, component: Component, mapStateToProps, mapSetStateToProps } = this.props
        return <Component {...mapStateToProps(state)} {...mapSetStateToProps(setState)} />
    }
}

export default Conductor