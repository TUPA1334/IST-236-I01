import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllLocations from "./screens/AllLocations";
import AddLocation from "./screens/AddLocation";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";
import LocationDetails from "./screens/LocationDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllLocations"
            component={AllLocations}
            options={({ navigation }) => ({
              title: "Past Travels",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddLocation")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddLocation"
            component={AddLocation}
            options={{
              title: "Add a New Location",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              title: "Choose a Location",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="LocationDetails"
            component={LocationDetails}
            options={{
              title: "Location Details",
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
