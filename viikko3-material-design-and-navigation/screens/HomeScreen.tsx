import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Etusivu, joka näytetään sovelluksen käynnistyessä
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Keskittää sisällön pystysuunnassa
    alignItems: "center" // Keskittää sisällön vaakasuunnassa
  }
});
