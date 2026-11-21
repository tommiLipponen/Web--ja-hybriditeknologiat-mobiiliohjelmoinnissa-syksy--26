import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// Pääkomponentilta saadaan funktio tehtävän lisäämistä varten
type TaskInputProps = {
  onAddTask: (text: string) => void;
};

export default function TaskInput({ onAddTask }: TaskInputProps) {
  // Tekstikentän sisältö pidetään erillisessä tilamuuttujassa
  const [text, setText] = useState("");

  // Tyhjiä tehtäviä ei tallenneta
  function saveTask() {
    const trimmedText = text.trim();

    if (trimmedText.length === 0) {
      return;
    }

    // Pääkomponentti lisää tehtävän sovelluksen tila-taulukkoon
    onAddTask(trimmedText);
    // Tekstikenttä tyhjennetään tallennuksen jälkeen
    setText("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task"
        // value ja onChangeText pitävät kentän Reactin tilassa
        value={text}
        onChangeText={setText}
        onSubmitEditing={saveTask}
        returnKeyType="done"
      />
      <Pressable onPress={saveTask}>
        {/* Save-tekstiä painamalla tehtävä lisätään listaan */}
        <Text style={styles.saveText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },
  input: {
    flex: 1,
    height: 40
  },
  saveText: {
    color: "#007aff",
    marginLeft: 16,
    fontSize: 16
  }
});
