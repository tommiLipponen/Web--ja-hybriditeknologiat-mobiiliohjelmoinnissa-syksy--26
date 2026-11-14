import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Toinen näyttö, johon siirrytään etusivun nuolipainikkeella
export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text>SecondScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
