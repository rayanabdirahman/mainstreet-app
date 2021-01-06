import React from 'react'
import { Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import tailwind from 'tailwind-rn'
import { AuthScreenName } from '../../navigation/types/enums'
import { AuthStackParamList } from '../../navigation/types/interfaces'
import { Button, LayoutWithContentContainer, SignUpStepEmail, SignUpStepName, SignUpStepPassword, SignUpStepUsername } from '../../components'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../../store/actions/authentication'
import useSignUpForm, { SignUpFormStepsEnum } from '../../hooks/auth/useSignUpForm'

const SignUpScreen = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.SIGN_UP>) => {
  const dispatch = useDispatch()
  const [formStep, setFormStep, formInputState, setFormInputState, formInputNames ] = useSignUpForm()

  return (
    <LayoutWithContentContainer>
      { 
        formStep === SignUpFormStepsEnum.NAME ? (
          <SignUpStepName onChangeText={(value: string) => setFormInputState({ ...formInputState, name: value })} />
        ) :
        formStep === SignUpFormStepsEnum.USERNAME ? (
          <SignUpStepUsername onChangeText={(value: string) => setFormInputState({ ...formInputState, username: value })} />
        ) : 
        formStep === SignUpFormStepsEnum.EMAIL ? (
          <SignUpStepEmail onChangeText={(value: string) => setFormInputState({ ...formInputState, email: value })} />
        ) : 
        formStep === SignUpFormStepsEnum.PASSWORD ? (
          <SignUpStepPassword onChangeText={(value: string) => setFormInputState({ ...formInputState, password: value })} />
        ) : null
      }
      <Button
        title={formStep === SignUpFormStepsEnum.PASSWORD ? "Sign up" : "Continue"}
        success={formStep === SignUpFormStepsEnum.PASSWORD ? false : true}
        // @ts-ignore
        // check if the current input field is empty
        disabled={!formInputState[formInputNames[formStep]] ? true : false}
        onPress={ () => (
          formStep === SignUpFormStepsEnum.PASSWORD ? dispatch(signUpUser({ ...formInputState })) : setFormStep(formStep + 1)
        )}/>
    </LayoutWithContentContainer>
  )
}

export default SignUpScreen
