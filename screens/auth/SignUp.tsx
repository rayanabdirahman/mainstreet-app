import React, { useState } from 'react'
import { Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import tailwind from 'tailwind-rn'
import { AuthScreenName } from '../../navigation/types/enums'
import { AuthStackParamList } from '../../navigation/types/interfaces'
import { Button, LayoutWithContentContainer, SignUpStepEmail, SignUpStepName, SignUpStepPassword, SignUpStepUsername } from '../../components'
import { SignUpModel } from '../../types'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../../store/actions/authentication'

const SignUpScreen = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_UP>) => {
  const dispatch = useDispatch()
  const [pageCounter, setPageCounter] = useState(0)
  const [state, setState] = React.useState<SignUpModel>({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  const SignUpStep = {
    NAME: 0,
    USERNAME: 1,
    EMAIL: 2,
    PASSWORD: 3,
  }

  return (
    <LayoutWithContentContainer>
      <Text style={tailwind('font-bold text-black text-2xl mb-2')}>Welcome to mainstreet</Text>             
      { 
        pageCounter === SignUpStep.NAME ? (
          <SignUpStepName onChangeText={(value: string) => setState({ ...state, name: value })} />
        ) :
        pageCounter === SignUpStep.USERNAME ? (
          <SignUpStepUsername onChangeText={(value: string) => setState({ ...state, username: value })} />
        ) : 
        pageCounter === SignUpStep.EMAIL ? (
          <SignUpStepEmail onChangeText={(value: string) => setState({ ...state, email: value })} />
        ) : 
        pageCounter === SignUpStep.PASSWORD ? (
          <SignUpStepPassword onChangeText={(value: string) => setState({ ...state, password: value })} />
        ) : null
      }
      <Button
        title={ pageCounter === SignUpStep.PASSWORD ? "Sign up" : "Continue" }
        success={ pageCounter === SignUpStep.PASSWORD ? false : true }
        onPress={ () => pageCounter !== SignUpStep.PASSWORD ? setPageCounter(pageCounter + 1) : dispatch(signUpUser({ ...state })) } />
    </LayoutWithContentContainer>
  )
}

export default SignUpScreen
