import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackParamList } from '../types/interfaces'
import { AuthScreenName } from '../types/enums'
import { SignInNavigator, SignUpNavigator } from '../screenNavigators'
import { LandingScreen } from '../../screens'

const AuthenticationStack = createStackNavigator<AuthStackParamList>()
const AuthNavigator = () => (
  <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthenticationStack.Screen name={AuthScreenName.LANDING} component={LandingScreen}/>
    <AuthenticationStack.Screen name={AuthScreenName.SIGN_UP} component={SignUpNavigator}/>
    <AuthenticationStack.Screen name={AuthScreenName.SIGN_IN} component={SignInNavigator}/>
  </AuthenticationStack.Navigator>
)

export default AuthNavigator
