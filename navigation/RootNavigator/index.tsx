import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../types/interfaces'
import { RootStackRouteName } from '../types/enums'
import BottomTabNavigator from '../BottomTabNavigator'

const Stack = createStackNavigator<RootStackParamList>()
const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={RootStackRouteName.ROOT} component={BottomTabNavigator} />
  </Stack.Navigator>
)

export default RootNavigator
