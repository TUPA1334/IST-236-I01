import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import Colors from "./constants/colors";
import NotesScreen from "./screens/NotesScreen";
import AddNoteScreen from "./screens/AddNoteScreen";
function NotesItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}></Text>
      </View>
      <View style={styles.itemButtonContainer}>
        <View style={styles.button}>
          <Button onNext={props.onView} />
        </View>
        <View style={styles.button}>
          <Button title="Delete" onPress={props.onDelete} />
        </View>
      </View>
    </View>
  );
}

export default NotesItem;
