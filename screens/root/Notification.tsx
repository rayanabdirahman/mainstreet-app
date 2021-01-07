import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import tailwind from 'tailwind-rn'
import { FeedStackRouteName } from '../../navigation/types/enums'
import { FeedStackParamList } from '../../navigation/types/interfaces'
import { Button, LayoutWithContentContainer } from '../../components'
import TextButton from '../../navigation/utilities/TextButton'

const NotificationScreen = ({ navigation }: StackScreenProps<FeedStackParamList, FeedStackRouteName.FEED_SCREEN>) => {
  return (
    <LayoutWithContentContainer>
      <Text style={tailwind('mb-2 font-bold text-black text-2xl')}>Activity</Text>
    </LayoutWithContentContainer>
  )
}

export default NotificationScreen