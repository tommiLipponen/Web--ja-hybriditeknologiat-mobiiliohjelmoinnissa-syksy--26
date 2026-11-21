import { Pressable, StyleSheet, Text } from "react-native";
import { Task } from "../types";

// Yksi rivi saa näytettävän tehtävän ja painalluksen käsittelijän
type TaskRowProps = {
  task: Task;
  onPress: () => void;
};

export default function TaskRow({ task, onPress }: TaskRowProps) {
  return (
    // Koko rivi toimii painikkeena tehtävän tilan vaihtamiseen
    <Pressable style={styles.row} onPress={onPress}>
      {/* Tehdylle tehtävälle lisätään ehdollinen yliviivaustyyli */}
      <Text style={[styles.taskText, task.done && styles.doneText]}>
        {task.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 8
  },
  taskText: {
    color: "#000000",
    fontSize: 16
  },
  doneText: {
    color: "#b0b0b0",
    textDecorationLine: "line-through"
  }
});
