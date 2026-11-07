import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

// Androidin alapalkin painikkeet valkoisiksi, jotta ne näkyvät sinisellä taustalla
NavigationBar.setStyle("light")

export default function App() {
  // Tilamuuttuja, joka kertoo onko modaali näkyvissä
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <View style={styles.root}>
    <View style={styles.container}>
      {/* Tekstiä painamalla modaali avataan */}
      <Pressable onPress={() => setVisible(true)}>
        <Text>Show modal message</Text>
      </Pressable>
      <Modal
        visible={visible} // Modaali näkyy kun visible on true
        animationType="slide" // Modaali liukuu näkyviin alhaalta
        transparent={true} // Alla oleva näkymä jää näkyviin modaalin ympärillä
        onRequestClose={() => setVisible(false)} // Androidin paluunäppäin sulkee modaalin
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.text}>This is modal...</Text>
            {/* Close-tekstiä painamalla modaali suljetaan */}
            <Pressable onPress={() => setVisible(false)}>
              <Text style={styles.close}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    </View>
  );
}

// Komponenttien tyylit määritellään StyleSheet.create-metodilla
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#2f3fb0" // Sininen tausta, joka näkyy alapalkin kohdalla
  },
  container: {
    flex: 1, // Käyttää koko käytettävissä olevan näyttötilan
    marginBottom: 48, // Jättää alapalkin kohdalle sinisen alueen
    backgroundColor: "white",
    justifyContent: "center", // Keskittää sisällön pystysuunnassa
    alignItems: "center" // Keskittää sisällön vaakasuunnassa
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start" // Sisältö näytön yläosaan
  },
  modalContent: {
    marginTop: 80,
    paddingVertical: 24,
    alignItems: "center",
    backgroundColor: "#f8f8f8", // Vaalea tausta modaalin sisältöalueelle
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#ddd"
  },
  text: {
    marginBottom: 24
  },
  close: {
    fontWeight: "bold" // Lihavoitu Close-teksti
  }
});
