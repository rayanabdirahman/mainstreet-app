import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux'
import tailwind from 'tailwind-rn'
import { State } from '../../store'
import { AlertState } from '../../store/interfaces'
import { AlertModel } from '../../types'

const AlertBackgroundColour = {
  success: 'bg-green-400',
  error: 'bg-red-400',
  warning: 'bg-yellow-400',
  info: 'bg-blue-400',
}

export const AlertBanner = () => {
  const alerts = useSelector<State, AlertState>(state => state.alert)
  return (
    <React.Fragment>
      { alerts && alerts.map((alert: AlertModel) => (
        <TouchableOpacity
          key={alert._id}
          style={tailwind(`p-5 w-full h-32 z-50 absolute ${AlertBackgroundColour[alert.type]} items-center justify-center`)}
          onPress={() => console.log('dismiss alert')}>
          <Text style={tailwind('pt-5 text-white text-base')}>{alert.message}</Text>
        </TouchableOpacity>    
      ))}
    </React.Fragment>
  )
}
