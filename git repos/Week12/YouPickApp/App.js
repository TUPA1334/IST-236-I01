import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChoicesScreen from "./screens/ChoicesScreen";
import ChosenScreen from "./screens/ChosenScreen";
import SearchScreen from "./screens/SearchScreen";
import YouPickScreen from "./screens/YouPickScreen";
import React from "react";
import colors from "./constants/colors";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
