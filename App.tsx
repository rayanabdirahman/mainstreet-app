import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { Provider, useDispatch, useSelector } from 'react-redux'
import useCachedResources from './hooks/useCachedResources'
import { State, store } from './store'
import Navigation from './navigation'
import { authoriseUser } from './store/actions/authentication'
import { SessionState } from './store/interfaces'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function App() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector<State, SessionState>(state => state.session)

  React.useEffect(() => {
    // dispatch action to check if user is authorised
    dispatch(authoriseUser())
  }, [])

  return (
    <SafeAreaProvider>
      <Navigation isUserSignedIn={isAuthenticated} />
      <StatusBar style="auto"/>
    </SafeAreaProvider>
  )
}

export default function () {
  const isLoadingComplete = useCachedResources()
  if (!isLoadingComplete) {
    return (
      <AppLoading />
    ) 
  } else {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
