import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You Pick!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Choices"
          onPress={() => navigation.navigate("Choices")}
          style={styles.button}
        />
        <Button
          title="You Pick!"
          onPress={() => navigation.navigate("You Pick!")}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    width: '40%', // Adjust button width as needed
  },
});

export default HomeScreen;
