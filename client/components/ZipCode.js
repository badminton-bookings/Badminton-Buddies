import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";

export default function ZipCode() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Where do you live?</Text>

      <TextInput
        //   style={styles.TextInput}
          placeholder="Zip Code."
          placeholderTextColor="#003f5c"
        //   onChangeText={(zipCode) => setZipCode(zipCode)}
        />
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

  Title: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
}
});
