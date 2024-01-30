import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Dice Roller</Text>
        </View>

        <View style={styles.rollButtonContainer}>
          <Pressable
            // Add Andriod ripple
            android_ripple={{ color: "#5c5c5c" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
          >
            <View style={styles.rollButton}>
              <Text style={styles.rollButtonText}>Roll Dice</Text>
            </View>
          </Pressable>
          {/*<Button title="Roll Dice" style={styles.rollButton} /> */}
        </View>

        <View style={styles.diceContainer}>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>Dice 1</Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>Dice 2</Text>
          </View>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>The resulting dice roll is __</Text>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>You Won / Lost ___</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ee940d",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  title: {
    fontSize: 60,
    fontWeight: "bold"
  },
  rollButtonContainer: {
    flex: 1
  },
  pressedButton: {
    opacity: 0.8,
  },
  rollButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  rollButtonText: {
    fontSize: 25
  },
  diceContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%"
  },
  dice: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 7,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  diceNumber: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic"
  },


});
