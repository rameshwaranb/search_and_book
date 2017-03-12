import { combineReducers } from 'redux'
import halls from './halls'

const appReducer = combineReducers({
  halls: halls
})

export default appReducer
