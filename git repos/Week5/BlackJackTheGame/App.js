import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Set state variable to determine which screen to show
  const [currentScreen, setCurrentScreen] = useState("start");

  // Functions to change the screen
  function newGameHandler() {
    setCurrentScreen("game");
  }
  function gameOverHandler() {
    setCurrentScreen("gameOver");
  }
  function startScreenHandler() {
    setCurrentScreen("start");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
