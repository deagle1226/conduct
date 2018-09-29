import reduce from 'lodash/reduce'

export default (reducers, state = {}, action = {}) => {
    return reduce(reducers, (result, func, name) => {
        result[name] = func(state[name], action)
        return result
    }, {})
}