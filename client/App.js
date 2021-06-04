import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Login from './components/Login'
import Gender from './components/Gender'
import SkillLevel from './components/SkillLevel'
import ZipCode from './components/ZipCode'

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Login/> */}
            {/* <Gender/> */}
            <SkillLevel/>
            {/* <ZipCode/> */}
        </View>
    )
}

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})
