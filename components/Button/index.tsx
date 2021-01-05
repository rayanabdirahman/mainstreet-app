import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import tailwind from 'tailwind-rn'

export const Button = (props: TouchableOpacity['props'] & { title: string }) => (
  <TouchableOpacity
    style={tailwind('p-5 rounded-full bg-black text-base mb-8 items-center')}
    { ...props }>
    <Text style={tailwind('text-white text-base')}>{ props.title }</Text>
  </TouchableOpacity>
)
