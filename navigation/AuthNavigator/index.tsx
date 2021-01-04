import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, SafeAreaView } from 'react-native'
import { AuthStackParamList } from '../types/interfaces'
import { AuthScreenName } from '../types/enums'
import tailwind from 'tailwind-rn'
import { StatusBar } from 'expo-status-bar'

const PlaceHolderScreen = () => (
  <SafeAreaView style={tailwind('bg-white')}>
    <View style={tailwind('p-4 pb-0')}>
      <Text>AuthScreens</Text>
      <StatusBar style="auto" />
    </View>              
  </SafeAreaView>
)

const AuthenticationStack = createStackNavigator<AuthStackParamList>()
const AuthNavigator = () => (
  <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthenticationStack.Screen name={AuthScreenName.LANDING} component={PlaceHolderScreen}/>
    <AuthenticationStack.Screen name={AuthScreenName.SIGN_IN} component={PlaceHolderScreen}/>
    <AuthenticationStack.Screen
      name={AuthScreenName.SIGN_UP}
      component={PlaceHolderScreen}/>
  </AuthenticationStack.Navigator>
)

export default AuthNavigator
