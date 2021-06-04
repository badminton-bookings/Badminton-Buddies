import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator'
import Login from './screens/login/Login'

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
              {/* <Stack.Screen
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})
