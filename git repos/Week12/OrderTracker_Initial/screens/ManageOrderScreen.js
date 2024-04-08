import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { StyleSheet, View } from "react-native";
import Button from "../components/UI/Button";
import { OrdersContext } from "../store/orders-context";

function ManageOrderScreen(props) {
  const ordersCtx = useContext(OrdersContext);

  const editedOrderId = props.route.params?.orderId; // ? Checks for undefined first
  const isEditing = !!editedOrderId; // Converts false-like value to false and true-like value to true

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: isEditing ? "Edit Order" : "Add Order",
    });
  }, [props.navigation, isEditing]);

  function deleteOrderHandler() {
    ordersCtx.deleteOrder(editedOrderId);
    props.navigation.goBack();
  }

  function cancelHandler() {
    props.navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      ordersCtx.updateOrder(editedOrderId, {
        description: "testing",
        total: 39.99,
        date: new Date("2024-01-10"),
        status: "Completed",
      });
    } else {
      ordersCtx.addOrder({
        description: "test",
        total: 19.99,
        date: new Date("2024-05-10"),
      });
    }
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="delete"
            color={GlobalStyles.colors.error500}
            size={30}
            onPress={deleteOrderHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
