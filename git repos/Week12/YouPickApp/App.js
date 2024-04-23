import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ChoicesScreen from "./screens/ChoicesScreen";
import ChosenScreen from "./screens/ChosenScreen";
import SearchScreen from "./screens/SearchScreen";
import YouPickScreen from "./screens/YouPickScreen";
import RestaurantFinder from "./components/RestaurantFinder";
import React from "react";
import colors from "./constants/colors";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";
import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyAfYagHjr4XvfisMKa8iC6cu7Zr6YlDKYw",
  version: "weekly",
  //additionalOptions,
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Choices" component={ChoicesScreen} />
        <Stack.Screen name="You Pick!" component={YouPickScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Chosen" component={ChosenScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
