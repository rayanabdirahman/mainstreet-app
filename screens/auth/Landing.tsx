import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import tailwind from 'tailwind-rn'
import { AuthScreenName } from '../../navigation/types/enums'
import { AuthStackParamList } from '../../navigation/types/interfaces'
import { Button, LayoutWithContentContainer } from '../../components'

const LandingScreen = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.LANDING>) => {
  return (
    <LayoutWithContentContainer>
      <View style={tailwind('mt-5 mb-8')}>
        <Text style={tailwind('font-bold text-black text-2xl mb-2')}>Lets get started!</Text>             
        <Text style={tailwind('font-normal text-gray-500 text-base')}>Shopping, but so much better</Text>      
      </View>
      <Button title='signin' onPress={() => navigation.navigate(AuthScreenName.SIGN_IN)} />
      <Button title='signup' onPress={() => navigation.navigate(AuthScreenName.SIGN_UP)} />
    </LayoutWithContentContainer>
  )
}

export default LandingScreen
