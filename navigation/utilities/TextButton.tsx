import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import tailwind from 'tailwind-rn'

const TextButton = ({ onPress, children }: TouchableOpacity['props']) => (
  <TouchableOpacity
    style={tailwind('mr-4 flex items-center justify-center')}
    onPress={onPress}>
    <Text style={tailwind('text-gray-500 text-sm')}>{ children }</Text>
  </TouchableOpacity>
)

export default TextButton
