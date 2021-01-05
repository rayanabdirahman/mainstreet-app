import React from 'react'
import BackButton from '../utilities/BackButton'

export const AuthHeaderOptions = {
  title: '',
  headerShown: true,
  headerBackTitle: ' ',
  headerBackImage: () => (<BackButton />),
  headerStyle: { shadowOpacity: 0, height: 150 }
}
