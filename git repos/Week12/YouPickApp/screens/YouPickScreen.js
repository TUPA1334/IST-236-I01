import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Modal, TouchableOpacity } from "react-native";

// Dummy data for restaurants (replace with actual data from API)
const dummyRestaurants = [
  { id: 1, name: "Restaurant 1", distance: 0.5 },
  { id: 2, name: "Restaurant 2", distance: 1.2 },
  { id: 3, name: "Restaurant 3", distance: 0.8 },
  { id: 4, name: "Restaurant 4", distance: 1.5 },
  { id: 5, name: "Restaurant 5", distance: 1.0 },
];

const YouPickScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Logic to fetch restaurants based on user's distance
    // For demo purposes, using dummy data
    setRestaurants(dummyRestaurants);
  }, []);

  const handleRestaurantPress = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedRestaurant(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You Pick App Page</Text>
      {restaurants.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          style={styles.restaurantButton}
          onPress={() => handleRestaurantPress(restaurant)}
        >
          <Text>{restaurant.name}</Text>
        </TouchableOpacity>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedRestaurant?.name}</Text>
            <TouchableOpacity style={styles.modalButton}>
              <Text>View Website</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text>View on Maps</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text>View Menu</Text>
            </TouchableOpacity>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  restaurantButton: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalButton: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default YouPickScreen;
