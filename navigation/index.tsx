import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'
import RootNavigator from './RootNavigator'
import AuthNavigator from './AuthNavigator'

type NavigationContainerPropsList = {
  colorScheme?: ColorSchemeName
  isUserSignedIn: boolean
}

function Navigation({ colorScheme, isUserSignedIn }: NavigationContainerPropsList) {
  // TODO: update colour scheme when theme switching functionality is added
  return <NavigationContainer theme={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
    { isUserSignedIn ?  <RootNavigator /> : <AuthNavigator /> }
  </NavigationContainer>
}

export default Navigation
