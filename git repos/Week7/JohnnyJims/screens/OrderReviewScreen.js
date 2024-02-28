import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";

function OrderReviewScreen() {
  //Set safe area boundries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Order Summary</Title>
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          Your order has been placed with your order details below
        </Text>
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredient}>Sandwich Size: </Text>
        <Text style={styles.subIngredient}>{props.size}</Text>
        <Text style={styles.ingredient}>Bread: </Text>
        <Text style={styles.subIngredient}>{props.bread}</Text>
        <Text style={styles.ingredient}>Cheese: </Text>
        <Text style={styles.subIngredient}>{props.cheese}</Text>
      </View>
    </View>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500,
  },
  ingredientsContainer: {
    flex: 3,
  },
  ingredient: {
    fontSize: 20,
    color: Colors.primary500,
  },
  subIngredient: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});
