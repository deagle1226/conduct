import React from 'react'
import { ConductProvider, conduce } from '../../../lib'

const NameInput = ({ name, setState }) => {
    console.log('rendered name')
    return (
        <input type="text" value={name} onChange={e => setState({ name: e.target.value })} />
    )
}
const ConductedNameInput = conduce(state => ({ name: state.name }))(NameInput)

const NameDisplay = ({ name }) => (
    <h3>{name}</h3>
)
const ConductedNameDisplay = conduce(state => ({ name: state.name }))(NameDisplay)

const ConductedIncrementer = conduce(state => ({ number: state.number }))(({ number, setState }) => {
    console.log('rendered number')
    return (
        <React.Fragment>
            <h1>{number}</h1>
            <button onClick={() => setState(state => ({ number: state.number + 1 }))}>+1</button>
        </React.Fragment>
    )
})

const IndexPage = () => (
    <ConductProvider initialState={{ name: 'name', number: 0 }}>
        <ConductedNameDisplay />
        <ConductedNameInput />
        <ConductedIncrementer />
    </ConductProvider>
)

export default IndexPage
