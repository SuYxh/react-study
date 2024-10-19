import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './countReducer'

const store = createStore(countReducer, applyMiddleware(thunk))

export default store