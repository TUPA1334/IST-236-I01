import { FlatList, Text } from "react-native";
import OrderItem from "./OrderItem";

function renderOrderItem(itemData) {
  return <OrderItem {...itemData.item}/>;
}

function OrdersList(props) {
  return (
    <FlatList
      data={props.orders}
      renderItem={renderOrderItem}
      keyExtractor={(item) => {
        return item.id;
      }}
    />
  );
}

export default OrdersList;
