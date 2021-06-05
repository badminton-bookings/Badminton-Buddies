import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './navigation/TabNavigator'
import LoginStack from './navigation/LoginStack';

// import Login from './screens/login/Login'
// import Gender from './screens/signup/Gender'
// import SkillLevel from './screens/signup/SkillLevel'
// import ZipCode from './screens/signup/ZipCode'

const Stack = createStackNavigator();

export default function App() {

  // if (app is still Loading) {
  //   // We haven't finished checking for the token yet
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {true /*isLoading*/ ? (
          <Stack.Screen
            name="Login"
            component={LoginStack} />
        ) :
          <Stack.Screen
          name="Main"
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
