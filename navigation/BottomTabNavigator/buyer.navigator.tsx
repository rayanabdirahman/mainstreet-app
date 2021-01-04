import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from '../utilities/tabBarIcon'
import { BottomTabParamList } from '../types/interfaces'
import { BottomTabRouteName } from '../types/enums'
import { FeedNavigator, ProfileNavigator, SearchNavigator } from '../navigators'
import { getColor } from 'tailwind-rn'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()
const BuyerNavigation = () => (
  <BottomTab.Navigator
    initialRouteName={BottomTabRouteName.FEED}
    tabBarOptions={{ 
      activeTintColor: getColor('gray-900'),
      inactiveTintColor: getColor('gray-400'),
      showLabel: false
    }}>
    <BottomTab.Screen
      name={BottomTabRouteName.FEED}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="earth" color={color} />,
      }}
    />
    <BottomTab.Screen
      name={BottomTabRouteName.SEARCH}
      component={SearchNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="search1" color={color} />,
      }}
    />
    <BottomTab.Screen
      name={BottomTabRouteName.PROFILE}
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="user" color={color} />,
      }}
    />
  </BottomTab.Navigator>
)

export default BuyerNavigation
