import React from 'react'
import { ConductConsumer } from '../conduct'
import Conductor from '../conductor'
import mapSetStateToDispatch from './dispatch'

const defaultMapState = () => ({})
const defaultMapDispatch = dispatch => ({ dispatch })

const condux = (mapStateToProps = defaultMapState, mapDispatchToProps = defaultMapDispatch) => Component => {
    const displayName = `Condux(${Component.displayName || Component.name || 'Component'})`

    const Condux = () => (
        <ConductConsumer>
            {conduct => <Conductor {...conduct} component={Component} mapStateToProps={mapStateToProps} mapSetStateToProps={setState => mapDispatchToProps(mapSetStateToDispatch(setState))} />}
        </ConductConsumer>
    )
    Condux.displayName = displayName

    return Condux
}

export default condux
 