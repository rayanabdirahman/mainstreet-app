import React from 'react'
import { TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import tailwind from 'tailwind-rn'

export const Input = (props: TextInput['props']) => (
  <TextInput style={tailwind('mb-8 pb-4 border-b border-gray-300 ')} { ...props } /> 
)

export const TextInputWithIcon = (props: TextInput['props'] & { iconName: string | any }) => (
  <View style={tailwind('mb-12 flex flex items-center flex-row border-b border-gray-300')}>
    <Feather size={20} name={props.iconName} style={tailwind('mr-3 pb-4 text-gray-400')} />
    <TextInput style={tailwind('pb-4 w-full text-base')} { ...props } />    
  </View>
)
