# Condux

A Redux-like wrapper for Conduct

```jsx
import { ConduxProvider, condux } from 'condux'

const NAME_UPDATE = 'NAME_UPDATE'
const updateName = name => ({
    type: NAME_UPDATE,
    name
})

const Component = ({ name, dispatch }) => (
    <input value={name} onChange={e => dispatch(updateName(e.target.value))} />
)
const ConduxComponent = condux(state => ({ name: state.name }))(Component)

const reducers = {
    name: (state = '', action) => {
        switch (action.type) {
            case NAME_UPDATE:
                return action.name
            default:
                return state
        }
    }
}

export default () => (
    <ConduxProvider reducers={reducers}>
        ...
        <ConduxComponent />
        ...
    </ConduxProvider>
)
```

## condux(mapStateToProps, mapDispatchToProps)
### mapStateToProps
```
const mapStateToProps = state => ({})
```
### mapDispatchToProps
```
const mapDispatchToProps = disaptch => ({ disaptch })
```