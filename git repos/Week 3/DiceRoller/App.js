import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable, Modal, TextInput } from "react-native";

export default function App() {
  // Set max and min dice value
  const maxVal = 6;
  const minVal = 1;
  // Create state management variables
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [userWager, setUserWager] = useState("");
  const [diceSum, setDiceSum] = useState(0);

  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }

  function endDiceRollHandler() {
    setModalIsVisible(false);
  }

  function onDiceRoll() {
    const rndNum1 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    const rndNum2 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);


    let result = rndNum1 + rndNum2;
    setDiceSum(result);


    endDiceRollHandler();
  }

  // Dynamically determine what type of result text to display
  let resultText = (
    <Text style={styles.resultText}>Roll the Dice and Make a Wager</Text>
  )

  const userGuessNum = parseInt(userGuess);
  const userWagerNum = parseInt(userWager);
  const diceSumNum = parseInt(userWager);
  if (userGuess !== "" && userGuessNum === diceSumNum) {
    resultText = <Text style={styles.resultText}>You Won ${(userWagerNum * 5).toFixed(2)}</Text>
  }

  if (userGuess !== "" && userGuessNum !== diceSumNum) {
    resultText = <Text style={styles.resultText}>You Lost ${userWagerNum}</Text>
  }

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
            //When pressed, open modal screen
            onPress={startDiceRollHandler}
          >
            <View style={styles.rollButton}>
              <Text style={styles.rollButtonText}>Roll Dice</Text>
            </View>
          </Pressable>
          {/*<Button title="Roll Dice" style={styles.rollButton} /> */}
        </View>

        <View style={styles.diceContainer}>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>1</Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>2</Text>
          </View>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>The resulting dice roll is {diceSum}</Text>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>{resultText}</Text>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>Guess the Roll Value</Text>
            <TextInput style={styles.textInput}
              // Placeholder for when its empty
              placeholder="Enter A Guess Between 2 and 12"
              // Set the keyboard type to number paf for only integers
              keyboardType="number-pad"
              // When the text is changed, update the userGuess
              onChangeText={setUserGuess}
              // Tie the entered value to the userGuess so when 
              // it is reset to blank the input field will alos reset
              value={userGuess}
            />
            <Text style={styles.inputLabel}>What's you Wager:</Text>
            <TextInput style={styles.textInput}
              // Placeholder for when its empty
              placeholder="Enter Your Wager Here"
              // Set the keyboard type to number paf for only integers
              keyboardType="number-pad"
              // When the text is changed, update the userGuess
              onChangeText={setUserWager}
              // Tie the entered value to the userGuess so when 
              // it is reset to blank the input field will alos reset
              value={userWager}
            />

            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button title="Roll Dice" onPress={onDiceRoll} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Cancel" onPress={endDiceRollHandler} />
              </View>
            </View>


          </SafeAreaView>

        </Modal>


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
  resultsContainer: {
    flex: 1,
  },
  resultText: {
    fontSize: 25
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#ee940d",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20
  },
  textInput: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 30
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8
  }
});
