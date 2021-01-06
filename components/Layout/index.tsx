import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from 'react-native'
import tailwind from 'tailwind-rn'

export const LayoutWithContentContainer = (props: View['props']) => (
  <SafeAreaView style={tailwind('bg-white')}>
    <View style={tailwind('bg-white h-full pt-4 pl-6 pr-6 pb-0')}>
      { props.children }
    </View>              
  </SafeAreaView>
)

export const LayoutWithOutContentContainer = (props: View['props']) => (
  <SafeAreaView style={tailwind('bg-white')}>
    <View style={tailwind('bg-white pt-4 pb-0')}>
      { props.children }
    </View>              
  </SafeAreaView>
)

export const KeyboardAvoidingContainer = ({ children }: View['props']) => (
  <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
    keyboardVerticalOffset={110}
    >
    { children }
  </KeyboardAvoidingView>
)
