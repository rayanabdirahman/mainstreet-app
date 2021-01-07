import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NotificationStackParamList } from '../types/interfaces'
import { NotificationStackRouteName } from '../types/enums'
import { NotificationScreen } from '../../screens'
import { AuthHeaderOptions } from '../styles'

const NotificationStack = createStackNavigator<NotificationStackParamList>()
const NotificationNavigator = () => (
  <NotificationStack.Navigator screenOptions={AuthHeaderOptions}>
    <NotificationStack.Screen
      name={NotificationStackRouteName.NOTIFICATION_SCREEN}
      component={NotificationScreen}
      options={{ headerShown: false }}
    />
  </NotificationStack.Navigator>
)

export default NotificationNavigator
