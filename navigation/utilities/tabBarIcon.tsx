import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'

const TabBarIcon = (props: { name: string | any, color: string, type?: string }) => (
  props.type === "Feather" ?
    <Feather size={24} style={{ marginBottom: -3 }} {...props} /> :
    <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />
)

export default TabBarIcon
