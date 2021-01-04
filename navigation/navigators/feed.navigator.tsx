import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, SafeAreaView } from 'react-native'
import tailwind from 'tailwind-rn'
import { FeedParamList } from '../interfaces'
import { FeedTabRouteName } from '../enums'
import { StatusBar } from 'expo-status-bar'

const PlaceHolderScreen = () => (
  <SafeAreaView style={tailwind('bg-white')}>
    <View style={tailwind('p-4 pb-0')}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>              
  </SafeAreaView>
)

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
