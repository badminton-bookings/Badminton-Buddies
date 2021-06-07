import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';

const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name={'Home'}
      component={Home}/>
    </Stack.Navigator>
  )
}
