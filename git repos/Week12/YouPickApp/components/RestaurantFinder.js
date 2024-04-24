import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";

const RestaurantFinder = () => {
  const [location, setLocation] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Location permission is required to use this app."
      );
      return;
    }

    let location = await getCurrentPositionAsync({});
    setLocation(location);
  };

  const fetchRestaurants = () => {
    if (!location) {
      Alert.alert(
        "Location not available",
        "Please make sure to enable location services."
      );
      return;
    }

    const { latitude, longitude } = location.coords;

    // Construct a request for nearby restaurants
    const request = {
      location: `${latitude},${longitude}`,
      radius: 5000, // 5 kilometers
      type: "restaurant",
      key: "GOOGLE_PLACES_API_KEY",
    };

    // Use Google Places API's Nearby Search
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${request.location}&radius=${request.radius}&type=${request.type}&key=${request.key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data.results.slice(0, 5)); // Display only the first 5 restaurants
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "GOOGLE_PLACES_API_KEY",
          language: "en",
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInputContainer: {
            width: "100%",
          },
          description: {
            fontWeight: "bold",
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location ? location.coords.latitude : 0,
          longitude: location ? location.coords.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.place_id}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
            title={restaurant.name}
            description={restaurant.vicinity}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default RestaurantFinder;
