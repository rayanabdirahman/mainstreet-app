import React from 'react'
import { SafeAreaView, View } from 'react-native'
import tailwind from 'tailwind-rn'

export const LayoutWithContentContainer = (props: View['props']) => (
  <SafeAreaView style={tailwind('bg-white')}>
    <View style={tailwind('bg-white h-full pt-4 pl-5 pr-5 pb-0')}>
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
