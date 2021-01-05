import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import tailwind from 'tailwind-rn'
import { AuthScreenName } from '../../navigation/types/enums'
import { AuthStackParamList } from '../../navigation/types/interfaces'
import { Button, Input, LayoutWithContentContainer } from '../../components'
import { TouchableOpacity } from 'react-native-gesture-handler'


const SignUpScreen = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_UP>) => {
  return (
    <LayoutWithContentContainer>
      <View style={tailwind('mb-10')}>
        <Text style={tailwind('font-bold text-black text-2xl mb-2')}>Welcome to mainstreet</Text>             
        <Text style={tailwind('font-normal text-gray-500 text-base')}>Enter your details to continue</Text>      
      </View>
    </LayoutWithContentContainer>
  )
}

export default SignUpScreen
