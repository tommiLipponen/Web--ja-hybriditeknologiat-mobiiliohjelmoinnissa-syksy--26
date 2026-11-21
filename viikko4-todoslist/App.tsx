import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Task } from "./types";

// Sama avain hakee aina tämän sovelluksen tallennetut tehtävät
const STORAGE_KEY = "todo-tasks";

export default function App() {
  // Tehtävät ja tieto tallennettujen tehtävien lataamisesta
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Haetaan tallennetut tehtävät puhelimen muistista sovelluksen käynnistyessä
  useEffect(() => {
    async function loadTasks() {
      try {
        const savedTasks = await AsyncStorage.getItem(STORAGE_KEY);

        if (savedTasks !== null) {
          // Merkkijono muutetaan takaisin tehtävätaulukoksi
          setTasks(JSON.parse(savedTasks));
        }
      } catch {
        Alert.alert("Error", "Could not load saved tasks.");
      } finally {
        setIsLoaded(true);
      }
    }

    loadTasks();
  }, []);

  // Tallennetaan tehtävälista puhelimen muistiin aina sen muuttuessa
  useEffect(() => {
    // Ei korvata tallennettuja tehtäviä ennen niiden lataamista
    if (!isLoaded) {
      return;
    }

    async function saveTasks() {
      try {
        // AsyncStorage tallentaa tiedot merkkijonona
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      } catch {
        Alert.alert("Error", "Could not save tasks.");
      }
    }

    saveTasks();
  }, [tasks, isLoaded]);

  // Lisätään uusi tekemätön tehtävä listan loppuun
  function addTask(text: string) {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      done: false
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  // Vaihdetaan painetun tehtävän tila tehdyksi tai tekemättömäksi
  function toggleTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        // Muut tehtävät palautetaan sellaisina kuin ne olivat
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.title}>Todo list</Text>
      </View>
      {/* Komponenteille välitetään tilan käsittelyfunktiot propseina */}
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Komponenttien tyylit määritellään StyleSheet.create-metodilla
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  header: {
    alignItems: "center",
    paddingVertical: 16
  },
  title: {
    fontSize: 18,
    color: "#000000"
  },
});
