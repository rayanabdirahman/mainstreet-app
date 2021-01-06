import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import tailwind from 'tailwind-rn'
import { AuthScreenName } from '../../navigation/types/enums'
import { AuthStackParamList } from '../../navigation/types/interfaces'
import { Button, LayoutWithContentContainer } from '../../components'
import TextButton from '../../navigation/utilities/TextButton'
import { TextInputWithIcon } from '../../components/Input'
import { useDispatch } from 'react-redux'
import useSignInForm from '../../hooks/auth/useSignInForm'
import { signInUser } from '../../store/actions/authentication'

const SignInScreen = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_IN>) => {
  const dispatch = useDispatch()
  const [formInputState, setFormInputState ] = useSignInForm()
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
        <TextInputWithIcon 
          iconName="user"
          placeholder="Username or Email"
          onChangeText={(value: string) => setFormInputState({ ...formInputState, email: value })}
        />
        <TextInputWithIcon
          secureTextEntry
          iconName="lock"
          placeholder="Password"
          onChangeText={(value: string) => setFormInputState({ ...formInputState, password: value })}
        />
      </View>
      <Button
        title="Login"
        disabled={!formInputState.email || !formInputState.password ? true : false}
        onPress={() => dispatch(signInUser({ ...formInputState }))}
      />
    </LayoutWithContentContainer>
  )
}

export default SignInScreen
