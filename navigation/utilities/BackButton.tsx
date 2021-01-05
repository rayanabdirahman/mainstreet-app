import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import tailwind from 'tailwind-rn'

const BackButton = ({ onPress }: TouchableOpacity['props']) => (
  <TouchableOpacity
    style={tailwind('ml-4 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center')}
    onPress={onPress}>
    <Feather size={24} name="chevron-left" style={tailwind('text-gray-400')}  />
  </TouchableOpacity>
)

export default BackButton
