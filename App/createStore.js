import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { weather }  from './reducers'

export default (initialState) => {
    const store = createStore(
        weather,
        initialState,
        applyMiddleware(thunk)
    )
    return store
}