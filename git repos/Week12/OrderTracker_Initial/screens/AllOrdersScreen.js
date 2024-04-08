import { useContext } from "react";
import OrdersOutput from "../components/OrdersOutput/OrdersOutput";
import { OrdersContext } from "../store/orders-context";

function AllOrdersScreen() {
  const ordersCtx = useContext(OrdersContext);

  return (
    <OrdersOutput
      summaryName="All Orders Total"
      orders={ordersCtx.orders}
      noOrdersText="No Orders Yet"
    />
  );
}

export default AllOrdersScreen;
