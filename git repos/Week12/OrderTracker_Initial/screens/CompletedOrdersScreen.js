import { useContext } from "react";
import OrdersOutput from "../components/OrdersOutput/OrdersOutput";
import { OrdersContext } from "../store/orders-context";

function CompletedOrderScreen() {
  const ordersCtx = useContext(OrdersContext);
  const completedOrders = ordersCtx.orders.filter((order) => {
    return order.status === "Completed";
  });

  return (
    <OrdersOutput
      summaryName="Completed Orders Total"
      orders={completedOrders}
      noOrdersText="No Completed Orders Yet"
    />
  );
}

export default CompletedOrderScreen;
