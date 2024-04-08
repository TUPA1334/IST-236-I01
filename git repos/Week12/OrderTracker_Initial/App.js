import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ManageOrderScreen from "./screens/ManageOrderScreen";
import OpenOrdersScreen from "./screens/OpenOrdersScreen";
import AllOrdersScreen from "./screens/AllOrdersScreen";
import CompletedOrderScreen from "./screens/CompletedOrdersScreen";
import IconButton from "./components/UI/IconButton";
import { GlobalStyles } from "./constants/styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import OrdersContextProvider from "./store/orders-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.primary50,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: GlobalStyles.colors.gray500,
        headerRight: (props) => (
          <IconButton
            icon="add"
            size={24}
            color={props.tintColor}
            onPress={() => {
              navigation.navigate("ManageOrders");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="OpenOrders"
        component={OpenOrdersScreen}
        options={{
          title: "Open Orders",
          tabBarLabel: "Open",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CompletedOrders"
        component={CompletedOrderScreen}
        options={{
          title: "Completed Orders",
          tabBarLabel: "Completed",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cash-register"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllOrders"
        component={AllOrdersScreen}
        options={{
          title: "All Orders",
          tabBarLabel: "All Orders",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <OrdersContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="BottomTabsNavigator"
              component={BottomTabsNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageOrders"
              component={ManageOrderScreen}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </OrdersContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
