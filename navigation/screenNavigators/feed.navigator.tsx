import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FeedStackParamList } from '../types/interfaces'
import { FeedStackRouteName } from '../types/enums'
import { FeedScreen } from '../../screens'
import { AuthHeaderOptions } from '../styles'

const FeedStack = createStackNavigator<FeedStackParamList>()
const FeedNavigator = () => (
  <FeedStack.Navigator screenOptions={AuthHeaderOptions}>
    <FeedStack.Screen
      name={FeedStackRouteName.FEED_SCREEN}
      component={FeedScreen}
      options={{ headerShown: false }}
    />
  </FeedStack.Navigator>
)

export default FeedNavigator
