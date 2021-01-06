import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LandingParamList } from '../types/interfaces'
import { LandingStackRouteName } from '../types/enums'
import { LandingScreen } from '../../screens'
import { AuthHeaderOptions } from '../styles'

const LandingStack = createStackNavigator<LandingParamList>()
const LandingNavigator = () => (
  <LandingStack.Navigator screenOptions={AuthHeaderOptions}>
    <LandingStack.Screen
      name={LandingStackRouteName.LANDING_SCREEN}
      component={LandingScreen}
    />
  </LandingStack.Navigator>
)

export default LandingNavigator
