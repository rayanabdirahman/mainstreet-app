import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import tailwind from 'tailwind-rn'
import { AuthScreenName } from '../../navigation/types/enums'
import { AuthStackParamList } from '../../navigation/types/interfaces'
import { Button, LayoutWithContentContainer } from '../../components'
import TextButton from '../../navigation/utilities/TextButton'
import { TextInputWithIcon } from '../../components/Input'

const SignInScreen = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_IN>) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => <TextButton>Trouble logging in?</TextButton>
    })
  }, [navigation])

  return (
    <LayoutWithContentContainer>
      <View style={tailwind('mb-10')}>
        <Text style={tailwind('font-bold text-black text-2xl mb-2')}>Welcome back</Text>             
        <Text style={tailwind('font-normal text-gray-500 text-base')}>Enter your credentials to continue</Text>      
      </View>
      <View style={tailwind('mb-3')}>
        <TextInputWithIcon iconName="user" placeholder="Username or Email" />
        <TextInputWithIcon secureTextEntry iconName="lock" placeholder="Password" />
      </View>
      <Button title="Login" onPress={() => alert('button')} />
    </LayoutWithContentContainer>
  )
}

export default SignInScreen
