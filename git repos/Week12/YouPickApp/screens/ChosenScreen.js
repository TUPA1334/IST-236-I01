import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ChoicesScreen = ({ navigation }) => {
  const [selectedCriteria, setSelectedCriteria] = useState({
    distance: null,
    rating: null,
    price: null,
    foodType: null,
    restaurantStyle: null,
  });

  const handleSearch = () => {
    // For testing purposes, create a dummy restaurant that fits the selected criteria
    const dummyRestaurant = {
      id: 1,
      name: "Dummy Restaurant",
      distance: selectedCriteria.distance || 0.5,
      rating: selectedCriteria.rating || 4.5,
      price: selectedCriteria.price || 2,
      foodType: selectedCriteria.foodType || "American",
      restaurantStyle: selectedCriteria.restaurantStyle || "Casual Dining",
    };

    navigation.navigate("Chosen", dummyRestaurant);
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
});

export default ChoicesScreen;
