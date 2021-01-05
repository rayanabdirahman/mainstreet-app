import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignInParamList } from '../types/interfaces'
import { SignInStackRouteName } from '../types/enums'
import { SignInScreen } from '../../screens'
import { AuthHeaderOptions } from '../styles'

const SignInStack = createStackNavigator<SignInParamList>()
const SignInNavigator = () => (
  <SignInStack.Navigator screenOptions={AuthHeaderOptions}>
    <SignInStack.Screen
      name={SignInStackRouteName.SIGN_IN_SCREEN}
      component={SignInScreen}
    />
  </SignInStack.Navigator>
)

export default SignInNavigator
