import React from 'react'
import ConduxProvider from '../../../lib/condux/provider'
import condux from '../../../lib/condux/condux'
import transform from 'lodash/transform'
import isEqual from 'lodash/isEqual'
import isObject from 'lodash/isObject'

const diff = (a, b) => {
    return transform(a, (result, value, key) => {
        if (!isEqual(value, b[key])) {
            if (isObject(value) && isObject(b[key])) {
                const { from, to } = diff(value, b[key])
                result.from[key] = from
                result.to[key] = to
                return result
            }
            result.from[key] = value
            result.to[key] = b[key]
            return result
        }
    }, { from: {}, to: {} })
}

const NAME_UPDATE_REQUEST = 'NAME_UPDATE_REQUEST'
const NAME_UPDATE = 'NAME_UDPATE'
const updateName = name => ({
    type: NAME_UPDATE,
    name,
    receivedAt: Date.now()
})
const NUMBER_INCREMENT = 'NUMBER_INCREMENT'

const nameUpdate = name => dispatch => {
    dispatch({ type: NAME_UPDATE_REQUEST })
    dispatch(updateName(name))
}

const numberIncrement = () => ({ type: NUMBER_INCREMENT })

const reducers = {
    name: (state = { data: 'name' }, action) => {
        switch (action.type) {
            case NAME_UPDATE_REQUEST:
                return state
            case NAME_UPDATE:
                return { data: action.name }
            default:
                return state
        }
    },
    number: (state = 0, action) => {
        switch (action.type) {
            case NUMBER_INCREMENT:
                return state + 1
            default:
                return state
        }
    }
}

const NameInput = condux(state => ({ name: state.name.data }))(({ name, dispatch }) => {
    console.log('rendered name')
    return (
        <input type="text" value={name} onChange={e => dispatch(nameUpdate(e.target.value))} />
    )
})

const NameDisplay = condux(state => ({ name: state.name.data }))(({ name }) => (
    <h3>{name}</h3>
))

const Incrementer = condux(state => ({ number: state.number }))(({ number, dispatch }) => {
    console.log('rendered number')
    return (
        <React.Fragment>
            <h1>{number}</h1>
            <button onClick={() => dispatch(numberIncrement())}>+1</button>
        </React.Fragment>
    )
})


const logger = (next, action, previous) => {
    console.log(`--- CONDUX LOGGER ---`)
    console.log('previous', previous)
    console.log('action', action)
    console.log('next', next)
    console.log('diff', diff(previous, next))
    return next
}

const ConduxExamplePage = () => (
    <ConduxProvider reducers={reducers} middleware={logger}>
        <NameDisplay />
        <NameInput />
        <Incrementer />
    </ConduxProvider>
)

export default ConduxExamplePage