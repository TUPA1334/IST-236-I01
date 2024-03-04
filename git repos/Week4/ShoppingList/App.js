import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
} from "react-native";

export default function App() {
  // Create state managment variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState("milk");
  const [enteredItemText, setEnteredItemText] = useState("");

  // Create Modal Screen Handler Functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    console.log(enteredItemText);
    if (shoppingItems.length === "") {
      setShoppingItems(enteredItemText);
    } else {
      setShoppingItems(shoppingItems + "\n" + enteredItemText);
    }
  }
  return (
    <>
      {/* Set Status Bar Styling */}
      <StatusBar style="auto" />

      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>
        {/* Set Add Item Button Container */}
        <View style={styles.buttonContainer}>
          <Button
            title="Add New Item"
            color="#bada55"
            onPress={startAddItemHandler}
          />
        </View>
        {/* Set Items to Get Title Container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items to Get</Text>
        </View>
        {/* Set List of Items Container */}
        <View style={styles.listContainer}>
          <Text style={styles.text}>List of Items Goes Here</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#df840d",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#4e4e4e",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    color: "#fff",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitleContainer: {
    flex: 1,
    backgroundColor: "#4e4e4e",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 30,
    color: "#fff",
  },
  listContainer: {
    flex: 4,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
