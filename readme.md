# Conduct

A simple React Context global state manager

```jsx
import { ConductProvider, conduce } from 'conduct'

const Component = ({ name, setState }) => (
    <input value={name} onChange={e => setState({ name: e.target.value })} />
)
const ConductedComponent = conduce(state => ({ name: state.name }))(Component)

export default () => (
    <ConductProvider initialState={{ name: '' }}>
        ...
        <ConductedComponent />
        ...
    </ConductProvider>
)
```

## conduce(mapStateToProps, mapSetStateToProps)
### mapStateToProps
```
const mapStateToProps = state => ({})
```
### mapSetStateToProps
```
const mapSetStateToProps = setState => ({ setState })
```