import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ChoicesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choices Screen</Text>
      <Button
        title="Go to You Pick!"
        onPress={() => navigation.navigate("You Pick!")}
      />
      <Button
        title="Go to Chosen Screen"
        onPress={() => navigation.navigate("Chosen")}
      />
      <Button
        title="Go to Search Screen"
        onPress={() => navigation.navigate("Search")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  Button: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default ChoicesScreen;
