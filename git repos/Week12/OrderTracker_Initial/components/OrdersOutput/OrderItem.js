import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function OrderItem(props) {
  const navigation = useNavigation();

  function orderPressHandler() {
    navigation.navigate("ManageOrders", {
      orderId: props.id,
    });
  }

  return (
    <Pressable
      onPress={orderPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.orderItem}>
        <View style={styles.infoContainer}>
          <View style={styles.rowContainer}>
            <Text style={[styles.text, styles.description]}>Order {props.id}</Text>
            <Text style={[styles.text, styles.description]}>
              {getFormattedDate(props.date)}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>{props.description}</Text>
          </View>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>{props.total.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default OrderItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  orderItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  infoContainer: {
    flex: 1
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10
  },
  text: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  totalContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  total: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
