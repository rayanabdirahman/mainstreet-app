import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux'
import tailwind from 'tailwind-rn'
import useCachedResources from './hooks/useCachedResources'
import { store } from './store'
import Navigation from './navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()
  if (!isLoadingComplete) {
    return (
      <AppLoading />
    ) 
  } else {
    return (
      <Provider store={store}>
        <Navigation isUserSignedIn={false} />
      </Provider>
    )
  }
}
