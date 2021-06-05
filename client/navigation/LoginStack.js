import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login/Login';
import Gender from '../screens/signup/Gender'
import SkillLevel from '../screens/signup/SkillLevel'
import ZipCode from '../screens/signup/ZipCode'

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name='Login'
        component={Login}
      />
      <Stack.Screen
        name='Gender'
        component={Gender}
      />
      <Stack.Screen
        name='Skill Level'
        component={SkillLevel}
      />
      <Stack.Screen
        name='Zip Code'
        component={ZipCode}
      />
    </Stack.Navigator>
  )
}
