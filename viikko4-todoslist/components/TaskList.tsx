import { FlatList, StyleSheet, View } from "react-native";
import { Task } from "../types";
import TaskRow from "./TaskRow";

// Lista saa tehtävät ja funktiot yhden tehtävän tilan vaihtamiseen
type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: string) => void;
};

export default function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    // FlatList näyttää tehtävätaulukon riveinä
    <FlatList
      data={tasks}
      // id auttaa FlatListia tunnistamaan jokaisen rivin
      keyExtractor={(task) => task.id}
      // Jokainen tehtävä renderöidään omana TaskRow-komponenttinaan
      renderItem={({ item }) => (
        <TaskRow task={item} onPress={() => onToggleTask(item.id)} />
      )}
      // Pieni väli lisätään vain, kun listassa on tehtäviä
      ListHeaderComponent={
        tasks.length > 0 ? <View style={styles.listHeader} /> : undefined
      }
    />
  );
}

const styles = StyleSheet.create({
  listHeader: {
    height: 4
  }
});
