import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as Location from "expo-location";

const YouPickScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nearestRestaurants, setNearestRestaurants] = useState([]);

  useEffect(() => {
    fetchNearestRestaurants();
  }, []);

  const fetchNearestRestaurants = async () => {
    // Request permission to access the user's location
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    // Get the user's current location
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    // Fetch nearest restaurants using latitude and longitude

    const nearest = await fetchRestaurants(latitude, longitude);
    setNearestRestaurants(nearest.slice(0, 5)); // Display only the first 5 nearest restaurants
  };

  const fetchRestaurants = async (latitude, longitude) => {
    const API_KEY = "Ask_For_Your_Own_Key";
    const radius = 5000; // 5 kilometers
    const type = "restaurant";

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  };
  const handleRestaurantClick = (restaurant) => {
    if (restaurant.website) {
      Linking.openURL(restaurant.website);
    } else {
      console.log("Website not available for this restaurant");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You Pick App Page</Text>
      <Button title="You Pick" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nearest Restaurants</Text>
            <FlatList
              data={nearestRestaurants}
              keyExtractor={(item, index) =>
                item.id ? item.id.toString() : index.toString()
              }
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleRestaurantClick(item)}>
                  <View style={styles.restaurantItem}>
                    <Text>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <Button title="Close" onPress={() => setModalVisible(false)} />
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
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  restaurantItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default YouPickScreen;
