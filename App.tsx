import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux'
import useCachedResources from './hooks/useCachedResources'
import { store } from './store'

export default function App() {
  const isLoadingComplete = useCachedResources()
  if (!isLoadingComplete) {
    return (
      <AppLoading />
    ) 
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>      
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
