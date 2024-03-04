import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import StartGameScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  //Set custom fonts
  const [fontsLoaded] = useFonts({
    poker: require("./assets/fonts/Poker.ttf"),
    pokerGeneral: require("./assets/fonts/PokerKings-Regular.ttf"),
  });

  // Set state variable to determine which screen to show
  const [currentScreen, setCurrentScreen] = useState("start");

  // Functions to change the screen
  function newGameHandler() {
    setCurrentScreen("game");
  }
  function gameOverHandler() {
    setCurrentScreen("gameOver");
  }
  function restartHandler() {
    setCurrentScreen("start");
  }

  let screen = <StartGameScreen onNext={newGameHandler} />;

  if (currentScreen === "game") {
    screen = <GameScreen onNext={gameOverHandler} />;
  }

  if (currentScreen === "gameOver") {
    screen = <GameOverScreen onNext={restartHandler} />;
  }

  return (
    <>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <View style={styles.container}>{screen}</View>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
});
