import { combineReducers } from 'redux'
import counterReducer from './../../features/counter/counterSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer
