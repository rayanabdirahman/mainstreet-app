import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import tailwind from 'tailwind-rn'
import { AuthScreenName } from '../../navigation/types/enums'
import { AuthStackParamList } from '../../navigation/types/interfaces'
import { Button, LayoutWithContentContainer } from '../../components'
import TextButton from '../../navigation/utilities/TextButton'

const LandingScreen = ({ navigation }: StackScreenProps<AuthStackParamList, AuthScreenName.LANDING>) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TextButton onPress={() => (
          navigation.navigate(AuthScreenName.SIGN_IN)
        )}>Already have an account? Login</TextButton>
      )
    })
  }, [navigation])

  return (
    <LayoutWithContentContainer>
      <View style={tailwind('flex-1')}></View>
      <View style={tailwind('mt-5 mb-14 flex-initial')}>
        <Text style={tailwind('mb-2 font-bold text-black text-2xl')}>Welcome to mainstreet</Text>             
        <Text style={tailwind('font-normal text-gray-500 text-base')}>Shop the stores you love. Discover new favourites</Text>
      </View>
      <Button title='Sign up' onPress={() => navigation.navigate(AuthScreenName.SIGN_UP)} />
    </LayoutWithContentContainer>
  )
}

export default LandingScreen
