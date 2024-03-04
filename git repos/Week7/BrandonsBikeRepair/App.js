import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useState, useMemo } from "react";
import Colors from "./constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";
import Title from "./components/Title";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  // Function to calculate total price based on user selections
  const calculateTotalPrice = () => {
    // implement the logic to calculate the total price
  };

  // Function to handle order submission
  const handleSubmitOrder = () => {
    // implement the logic to handle order submission
  };

  // Function to reset user selections and total price
  const resetOrder = () => {
    // implement the logic to reset user selections and total price
  };

  return (
    <View style={styles.container}>
      <Title title="Bicycle Repair Shop" />
      {currentScreen === "Home" ? (
        <HomeScreen
          repairTimeRadioButtons={repairTimeRadioButtons}
          repairTimeId={repairTimeId}
          setRepairTimeId={setRepairTimeId}
          services={services}
          setServices={setServices}
          newsletter={newsletter}
          setNewsletter={setNewsletter}
          rentalMembership={rentalMembership}
          setRentalMembership={setRentalMembership}
          calculateTotalPrice={calculateTotalPrice}
          handleSubmitOrder={handleSubmitOrder}
        />
      ) : (
        <OrderReviewScreen
        // Pass necessary props for the order review screen
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
