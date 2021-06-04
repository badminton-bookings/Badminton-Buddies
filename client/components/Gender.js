import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from "react-native";

export default function Gender() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}  >What is you gender?</Text>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
          title="Male"
        ></Button>
        <Button
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
          title="Female"
        ></Button>
        <Button
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
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