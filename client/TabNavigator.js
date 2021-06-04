import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './screens/home/Home'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
    </Tab.Navigator>
  )
}


