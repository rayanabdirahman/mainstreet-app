import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import tailwind from 'tailwind-rn'
import { AuthScreenName, FeedStackRouteName } from '../../navigation/types/enums'
import { AuthStackParamList, FeedStackParamList } from '../../navigation/types/interfaces'
import { Button, LayoutWithContentContainer } from '../../components'
import TextButton from '../../navigation/utilities/TextButton'

const FeedScreen = ({ navigation }: StackScreenProps<FeedStackParamList, FeedStackRouteName.FEED_SCREEN>) => {
  return (
    <LayoutWithContentContainer>
      <Text style={tailwind('mb-2 font-bold text-black text-2xl')}>Feed</Text> 
    </LayoutWithContentContainer>
  )
}

export default FeedScreen