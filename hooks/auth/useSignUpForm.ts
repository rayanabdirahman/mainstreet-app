import React, { useState } from 'react'
import { SignUpModel } from '../../types'

export enum SignUpFormStepsEnum {
  NAME = 0,
  USERNAME = 1,
  EMAIL = 2,
  PASSWORD = 3,
}

export default function useSignUpForm() {
  const formInputNames = ['name', 'username', 'email', 'password']
  const [formStep, setFormStep] = useState(0)
  const [formInputState, setFormInputState] = React.useState<SignUpModel>({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  return [
    formStep,
    setFormStep,
    formInputState,
    setFormInputState,
    formInputNames
  ] as const
}
