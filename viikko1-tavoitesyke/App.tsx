import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // Tilamuuttuja, joka säilyttää käyttäjän syöttämän iän (merkkijono, koska se voi olla tyhjä)
  const [age, setAge] = useState<string>("")
  // Muunnetaan syötetty teksti numeroksi
  const ageAsNumber: number = Number(age)
  // Tarkistetaan, onko syötetty arvo kelvollinen numero (esim. pelkkä pilkku tai piste ei ole)
  const isValidAge: boolean = !isNaN(ageAsNumber)
  // Lasketaan sykealueen alaraja kaavalla (220-ikä) * 0.65; epäkelvolla syötteellä näytetään nolla
  const lower: number = isValidAge ? (220 - ageAsNumber) * 0.65 : 0
  // Lasketaan sykealueen yläraja kaavalla (220-ikä) * 0.85; epäkelvolla syötteellä näytetään nolla
  const upper: number = isValidAge ? (220 - ageAsNumber) * 0.85 : 0

  return (
    <View style={styles.container}>
      {/* Otsikkoteksti näytön yläosassa */}
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      {/* Kenttää kuvaava teksti syötekentän yläpuolella */}
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input} // Antaa syötekentälle reunaviivan ja sisäisen tilan
        keyboardType="number-pad" // Näyttää numeerisen näppäimistön puhelimessa/emulaattorissa
        value={age} // Kentän sisältöä ohjaa age-tilamuuttuja
        onChangeText={setAge} // Päivittää age-tilamuuttujan aina kun käyttäjä kirjoittaa
      />
      {/* Näyttää lasketun sykealueen, pyöristettynä kahteen desimaaliin */}
      <Text style={styles.text}>Lower limit: {lower.toFixed(2)} bpm</Text>
      <Text style={styles.text}>Upper limit: {upper.toFixed(2)} bpm</Text>
    </View>
  );
}

// Komponenttien tyylit määritellään StyleSheet.create-metodilla (tavallista css:ää ei voi käyttää suoraan)
const styles = StyleSheet.create({
  container: {
    flex: 1, // Käyttää koko käytettävissä olevan näyttötilan
    margin: 16 // Marginaali koko näkymän ympärillä
  },
  heading: {
    fontSize: 22, // Suurempi fonttikoko otsikolle
    fontWeight: "bold", // Lihavoitu otsikkoteksti
    marginTop: 32, // Tila otsikon yläpuolella
    marginBottom: 24 // Tila otsikon alapuolella
  },
  label: {
    fontSize: 14, // Pienempi fonttikoko kenttää kuvaavalle tekstille
    marginBottom: 4 // Pieni tila tekstin ja syötekentän välissä
  },
  input: {
    borderWidth: 1, // Näkyvä reunaviiva syötekentän ympärillä
    borderColor: "#999", // Reunaviivan väri
    borderRadius: 4, // Hieman pyöristetyt kulmat
    padding: 8, // Sisäinen tila tekstin ympärillä
    width: 120 // Kentän leveys
  },
  text: {
    marginTop: 16 // Tila tulostekstien yläpuolella
  }
});
