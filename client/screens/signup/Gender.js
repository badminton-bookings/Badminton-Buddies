import { useNavigation } from "@react-navigation/core";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from "react-native";

export default function Gender() {
  const navigation = useNavigation()

  const nextScreen = () => {
    Alert.alert("Simple Button pressed")
    navigation.navigate('Skill Level')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Title}  >What is your gender?</Text>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => nextScreen()}
          title="Male"
        ></Button>
        <Button
          style={styles.button}
          onPress={() => nextScreen()}
          title="Female"
        ></Button>
        <Button
          style={styles.button}
          onPress={() => nextScreen()}
          title="Other"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "skyblue",
  },

  buttonContainer: {
    width: 200,
    height: 100,
  },

  Title: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
}
});
