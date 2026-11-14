import React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import CustomAppBar from "./components/CustomAppBar";

// Luodaan pinonavigaattori, joka pitää kirjaa näytöistä pinona
const Stack = createStackNavigator();

export default function App() {
  return (
    // PaperProvider tarjoaa Material Design -teeman Paper-komponenteille
    <PaperProvider>
      {/* NavigationContainer hallitsee navigaation tilaa */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home" // Ensimmäisenä näytettävä näyttö
          screenOptions={{
            header: (props) => <CustomAppBar {...props} /> // Käytetään omaa sovelluspalkkia oletuksen sijaan
          }}
        >
          {/* Rekisteröidään näytöt nimillä, joita navigate-kutsu käyttää */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
