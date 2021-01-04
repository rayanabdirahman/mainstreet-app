import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, SafeAreaView } from 'react-native'
import tailwind from 'tailwind-rn'
import { ProfileParamList } from '../types/interfaces'
import { ProfileTabRouteName } from '../types/enums'
import { StatusBar } from 'expo-status-bar'

const PlaceHolderScreen = () => (
  <SafeAreaView style={tailwind('bg-white')}>
    <View style={tailwind('p-4 pb-0')}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>              
  </SafeAreaView>
)

const ProfileStack = createStackNavigator<ProfileParamList>()
const ProfileNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name={ProfileTabRouteName.PROFILE_SCREEN}
      component={PlaceHolderScreen}
      options={{ headerShown: false }}
    />
  </ProfileStack.Navigator>
)

export default ProfileNavigator
