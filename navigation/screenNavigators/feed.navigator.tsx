import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, SafeAreaView, Button } from 'react-native'
import tailwind from 'tailwind-rn'
import { FeedParamList } from '../types/interfaces'
import { FeedTabRouteName } from '../types/enums'
import { StatusBar } from 'expo-status-bar'
import { signOutUser } from '../../store/actions/authentication'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LayoutWithContentContainer } from '../../components'

const PlaceHolderScreen = () => {
  const dispatch = useDispatch()
  return (
    <LayoutWithContentContainer>
      <Text>Feed</Text>
      <Button title='clear' onPress={() => AsyncStorage.clear()} />
    </LayoutWithContentContainer>
  )
}

const FeedStack = createStackNavigator<FeedParamList>()
const FeedNavigator = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen
      name={FeedTabRouteName.FEED_SCREEN}
      component={PlaceHolderScreen}
      options={{ headerShown: false }}
    />
  </FeedStack.Navigator>
)

export default FeedNavigator
