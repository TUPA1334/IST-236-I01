import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal } from "react-native";

const ChoicesScreen = ({ navigation }) => {
  const [selectedCriteria, setSelectedCriteria] = useState({
    distance: null,
    rating: null,
    price: null,
    foodType: null,
    restaurantStyle: null,
  });

  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = () => {
    // For testing purposes, create a list of dummy restaurants that fit the selected criteria
    const dummyRestaurants = [
      { id: 1, name: "Restaurant 1", distance: selectedCriteria.distance || 0.5 },
      { id: 2, name: "Restaurant 2", distance: selectedCriteria.distance || 0.8 },
      { id: 3, name: "Restaurant 3", distance: selectedCriteria.distance || 1.2 },
      { id: 4, name: "Restaurant 4", distance: selectedCriteria.distance || 1.5 },
      { id: 5, name: "Restaurant 5", distance: selectedCriteria.distance || 2.0 },
    ];

    setRestaurants(dummyRestaurants);
  };

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
      <Text style={styles.title}>Choices Screen</Text>
      <View style={styles.criteriaContainer}>
        <Text>Distance: {selectedCriteria.distance || "Select distance"}</Text>
        <Button title="Select" onPress={() => setSelectedCriteria({ ...selectedCriteria, distance: 1 })} />
      </View>
      <View style={styles.criteriaContainer}>
        <Text>Rating: {selectedCriteria.rating || "Select rating"}</Text>
        <Button title="Select" onPress={() => setSelectedCriteria({ ...selectedCriteria, rating: 4.5 })} />
      </View>
      <View style={styles.criteriaContainer}>
        <Text>Price: {selectedCriteria.price || "Select price"}</Text>
        <Button title="Select" onPress={() => setSelectedCriteria({ ...selectedCriteria, price: 2 })} />
      </View>
      <View style={styles.criteriaContainer}>
        <Text>Food Type: {selectedCriteria.foodType || "Select food type"}</Text>
        <Button title="Select" onPress={() => setSelectedCriteria({ ...selectedCriteria, foodType: "American" })} />
      </View>
      <View style={styles.criteriaContainer}>
        <Text>Restaurant Style: {selectedCriteria.restaurantStyle || "Select restaurant style"}</Text>
        <Button title="Select" onPress={() => setSelectedCriteria({ ...selectedCriteria, restaurantStyle: "Casual Dining" })} />
      </View>
      <Button title="Search" onPress={handleSearch} />

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
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.restaurantList}>
        {restaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            style={styles.restaurantItem}
            onPress={() => handleRestaurantPress(restaurant)}
          >
            <Text>{restaurant.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  criteriaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
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
  closeButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  restaurantList: {
    marginTop: 20,
    width: "100%",
  },
  restaurantItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});

export default ChoicesScreen;
