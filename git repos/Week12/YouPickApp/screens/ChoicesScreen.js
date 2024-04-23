import React, { useState } from "react";
import { View, Text, Button, Modal, FlatList } from "react-native";

const GOOGLE_PLACES_API_KEY = "ASK_For_Your_Own_Key";

const ChoicesScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [randomRestaurants, setRandomRestaurants] = useState([]);

  const handleShowRandomRestaurants = async () => {
    try {
      const response = await fetchRandomRestaurants();
      const data = await response.json();
      const restaurants = data.results.map((result, index) => ({
        id: index + 1,
        name: result.name,
      }));
      setRandomRestaurants(restaurants);
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching random restaurants:", error);
    }
  };

  const fetchRandomRestaurants = async () => {
    const location = "37.7749,-122.4194"; // San Francisco coordinates
    const radius = 5000; // 5 kilometers
    const type = "restaurant";
    const endpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${GOOGLE_PLACES_API_KEY}`;

    return fetch(endpoint);
  };

  return (
    <View>
      <Text>Choose Your Criteria:</Text>
      <Button
        title="Show Random Restaurants"
        onPress={handleShowRandomRestaurants}
      />

      {/* Modal to display random restaurants */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              elevation: 5,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Random Restaurants
            </Text>
            <FlatList
              data={randomRestaurants}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                  }}
                >
                  <Text>{item.name}</Text>
                </View>
              )}
            />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChoicesScreen;
