import React from "react";
import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";

// Oma sovelluspalkki; navigation siirtää näytöltä toiselle, back on määritelty vain jos voi palata
export default function CustomAppBar({ navigation, back }: StackHeaderProps) {
  return (
    // Appbar.Header on Paperin Material Design -yläpalkki
    <Appbar.Header>
      {/* Takaisin-painike näytetään vain, jos edelliselle näytölle voi palata */}
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      {/* Palkin otsikkoteksti */}
      <Appbar.Content title="MD Nav Demo" />
      {/* Etusivulla näytetään nuoli, jolla siirrytään SecondScreeniin */}
      {!back ? (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate("Second")} />
      ) : null}
    </Appbar.Header>
  );
}
