import React, { useState } from 'react';
import { View, Text, Button, Pressable, Modal, TextInput, StyleSheet } from 'react-native';

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

const MagicEightBallApp = () => {
  const [userQuestion, setUserQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleAsk = () => {
    // Randomly select a response from the array
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    // Set the response in the state and show the modal
    setResponse(randomResponse);
    setModalIsVisible(true);
  };

  const handleCloseModal = () => {
    // Close the modal and reset the state
    setModalIsVisible(false);
    setUserQuestion("");
    setResponse("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magic Eight Ball</Text>
      <TextInput
        style={styles.input}
        placeholder="Ask a question..."
        value={userQuestion}
        onChangeText={(text) => setUserQuestion(text)}
      />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressedButton]}
        onPress={handleAsk}
      >
        <Text style={styles.buttonText}>Ask the Magic Eight Ball</Text>
      </Pressable>

      <Modal animationType="slide" transparent={true} visible={modalIsVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Your Question: {userQuestion}</Text>
            <Text>Response: {response}</Text>
            <Button title="Close" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee940d',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 7,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  pressedButton: {
    opacity: 0.8,
  },
  buttonText: {
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

export default MagicEightBallApp;
