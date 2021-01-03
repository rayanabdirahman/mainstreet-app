import { combineReducers } from 'redux'

export default combineReducers({ 
  session: () => ({ 
    token: null,
    isAuthenticated: false,
    loading: false,
    user: null
  }) 
})
