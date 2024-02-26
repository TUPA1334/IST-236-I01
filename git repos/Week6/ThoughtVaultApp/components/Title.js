import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import Colors from "./constants/colors";
import NotesScreen from "./screens/NotesScreen";
import AddNoteScreen from "./screens/AddNoteScreen";
function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 65,
    color: Colors.primary300,
    textShadowColor: Colors.accent800,
    textShadowRadius: 25,
    fontFamily: "noteFont",
    textAlign: "center",
  },
});
