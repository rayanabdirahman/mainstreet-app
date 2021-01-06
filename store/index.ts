import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { AlertState, SessionState } from './interfaces'

export type State = {
  alert: AlertState
  session: SessionState
}

const middleware = [thunk]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
