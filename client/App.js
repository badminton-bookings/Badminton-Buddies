import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator'
import Login from './screens/login/Login'
import Gender from './screens/signup/Gender'
import SkillLevel from './screens/signup/SkillLevel'
import ZipCode from './screens/signup/ZipCode'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true /*isLoading*/ ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login} />
            {/* <Stack.Screen Nest another Stack.Navigator here??
              name="Home"
              component={TabNavigator} /> */}

          </>
        ) :
          <Stack.Screen
          name="Home"
          component={TabNavigator} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
            {/* <Login/> */}
            {/* <Gender/> */}
            {/* <SkillLevel/> */}
            {/* <ZipCode/> */}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})
