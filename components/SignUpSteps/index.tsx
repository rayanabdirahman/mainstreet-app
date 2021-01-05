import React from 'react'
import { Text, TextInput } from 'react-native'
import tailwind from 'tailwind-rn'
import { TextInputWithIcon } from '../../components/Input'

export const SignUpStepName = (props: TextInput['props']) => (
  <React.Fragment>
    <Text style={tailwind('mb-10 font-normal text-gray-500 text-base')}>Enter your name to continue</Text>
    <TextInputWithIcon iconName="user" placeholder="Name" {...props } />   
  </React.Fragment>
)

export const SignUpStepUsername = (props: TextInput['props']) => (
  <React.Fragment>
    <Text style={tailwind('mb-10 font-normal text-gray-500 text-base')}>Enter a username to continue</Text>
    <TextInputWithIcon iconName="user" placeholder="Username" {...props } />   
  </React.Fragment>
)

export const SignUpStepEmail = (props: TextInput['props']) => (
  <React.Fragment>
   <Text style={tailwind('mb-10 font-normal text-gray-500 text-base')}>Enter your email address to continue</Text>
   <TextInputWithIcon iconName="mail" placeholder="Email" {...props } />   
  </React.Fragment>
)

export const SignUpStepPassword = (props: TextInput['props']) => (
  <React.Fragment>
    <Text style={tailwind('mb-10 font-normal text-gray-500 text-base')}>Enter a password to continue</Text>
    <TextInputWithIcon secureTextEntry iconName="lock" placeholder="Password" {...props } />   
  </React.Fragment>
)
