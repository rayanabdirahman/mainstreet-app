import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ColorSchemeName } from 'react-native'
import { RootStackParamList } from './interfaces'
import { RootStackRouteName } from './enums'
import BottomTabNavigator from './BottomTabNavigator'

type NavigationContainerPropsList = {
  colorScheme?: ColorSchemeName
  isUserSignedIn: boolean
}

function Navigation({ colorScheme, isUserSignedIn }: NavigationContainerPropsList) {
  // TODO: update colour scheme when theme switching functionality is added
  return <NavigationContainer theme={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
    { isUserSignedIn ?  <RootNavigator /> : <RootNavigator /> }
  </NavigationContainer>
}

const Stack = createStackNavigator<RootStackParamList>()
const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={RootStackRouteName.ROOT} component={BottomTabNavigator} />
  </Stack.Navigator>
)

export default Navigation
