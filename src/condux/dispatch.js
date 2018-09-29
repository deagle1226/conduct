import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import reduce from './reduce'

const mapSetStateToDispatch = setState => {
    const dispatch = action => {
        if (isFunction(action)) {
            return action(dispatch)
        } else if (isObject(action) && action.type) {
            return setState(({ reducers, middleware, ...state }) => {
                return middleware(reduce(reducers, state, action), action, state)
            })
        }
        console.error('invalid action')
        return null
    }
    return dispatch
}
   

export default mapSetStateToDispatch