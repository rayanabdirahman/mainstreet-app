import { combineReducers } from 'redux'
import  authentication from './authentication'
import  alert from './alert'

export default combineReducers({
  alert,
  session: authentication
})
