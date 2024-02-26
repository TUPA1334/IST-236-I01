import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import Colors from "./constants/colors";
import NotesScreen from "./screens/NotesScreen";
import AddNoteScreen from "./screens/AddNoteScreen";
function NavButton(props) {
  return (
    <Pressable
      onPress={props.onNext}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 6,
    backgroundColor: Colors.accent500,
    height: 75,
    width: 150,
    margin: 8,
  },
    pressedItem: {
        opacity: 0.8,
    },

  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.primary300,
    fontFamily: "paperNoteBold",
  },
});
