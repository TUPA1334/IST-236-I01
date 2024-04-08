import { StyleSheet, View, Text } from "react-native";
import OrdersSummary from "./OrdersSummary";
import OrdersList from "./OrdersList";
import { GlobalStyles } from "../../constants/styles";

function OrdersOutput(props) {

  let content = <Text style={styles.text}>{props.noOrdersText}</Text>

  if (props.orders.length > 0){
    content = <OrdersList orders={props.orders} />
  }


  return (
    <View style={styles.container}>
      <OrdersSummary summaryName={props.summaryName} orders={props.orders} />  
      {content}
    </View>
  );
}

export default OrdersOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32
  }
});
