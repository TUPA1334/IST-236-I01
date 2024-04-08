import { useContext } from "react";
import OrdersOutput from "../components/OrdersOutput/OrdersOutput";
import { OrdersContext } from "../store/orders-context";

function OpenOrdersScreen() {
  const ordersCtx = useContext(OrdersContext);
  const openOrders = ordersCtx.orders.filter((order) => {
    return order.status === "Open";
  });

  return (
    <OrdersOutput
      summaryName="Open Orders Total"
      orders={openOrders}
      noOrdersText="No Open Orders Yet"
    />
  );
}

export default OpenOrdersScreen;
