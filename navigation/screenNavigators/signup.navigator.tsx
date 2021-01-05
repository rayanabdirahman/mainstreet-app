import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignUpParamList } from '../types/interfaces'
import { SignUpStackRouteName } from '../types/enums'
import { SignUpScreen } from '../../screens'
import { AuthHeaderOptions } from '../styles'

const SignUpStack = createStackNavigator<SignUpParamList>()
const SignUpNavigator = () => (
  <SignUpStack.Navigator screenOptions={AuthHeaderOptions}>
    <SignUpStack.Screen
      name={SignUpStackRouteName.SIGN_UP_SCREEN}
      component={SignUpScreen}
    />
  </SignUpStack.Navigator>
)

export default SignUpNavigator
