import React from 'react'
import { ConductConsumer } from './conduct'
import Conductor from './conductor'

const defaultMapState = () => ({})
const defaultMapSetState = setState => ({ setState })

const conduce = (mapStateToProps = defaultMapState, mapSetStateToProps = defaultMapSetState) => Component => {
    const displayName = `Conduct(${Component.displayName || Component.name || 'Component'})`

    const Conduce = () => (
        <ConductConsumer>
            {conduct => <Conductor {...conduct} component={Component} mapStateToProps={mapStateToProps} mapSetStateToProps={mapSetStateToProps} />}
        </ConductConsumer>
    )
    Conduce.displayName = displayName

    return Conduce
}

export default conduce
