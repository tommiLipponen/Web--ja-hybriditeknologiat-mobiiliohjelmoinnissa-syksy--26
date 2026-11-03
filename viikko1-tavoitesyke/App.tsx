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
      <Text style={styles.heading}>Tavoitesyke</Text>
      <TextInput
        placeholder="Ikä" // Kenttä sisällä näkyvä teksti ennen kuin käyttäjä kirjoittaa jotain
        keyboardType="number-pad" // Näyttää numeerisen näppäimistön puhelimessa/emulaattorissa
        value={age} // Kentän sisältöä ohjaa age-tilamuuttuja
        onChangeText={setAge} // Päivittää age-tilamuuttujan aina kun käyttäjä kirjoittaa
      />
      {/* Näyttää lasketun sykealueen, pyöristettynä kokonaisluvuiksi */}
      <Text style={styles.text}>Alaraja: {lower.toFixed(0)}</Text>
      <Text style={styles.text}>Yläraja: {upper.toFixed(0)}</Text>
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
    fontSize: 24, // Suurempi fonttikoko otsikolle
    marginTop: 32, // Tila otsikon yläpuolella
    marginBottom: 16 // Tila otsikon alapuolella
  },
  text: {
    marginVertical: 16 // Tila tulostekstin ylä- ja alapuolella
  }
});
