import React from 'react'
import { SignInModel } from '../../types'

export default function useSignUpForm() {
  const [formInputState, setFormInputState] = React.useState<SignInModel>({
    email: '',
    password: ''
  })

  return [
    formInputState,
    setFormInputState
  ] as const
}
