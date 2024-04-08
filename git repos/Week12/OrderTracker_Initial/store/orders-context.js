import { createContext, useReducer } from "react";

const DUMMY_ORDERS = [
  {
    id: "#0000001",
    description: " A shirt",
    total: 32.99,
    status: "Open",
    date: new Date("2024-03-13"),
  },
  {
    id: "#0000002",
    description: " A pair of pants",
    total: 63.56,
    status: "Open",
    date: new Date("2024-02-20"),
  },
  {
    id: "#0000003",
    description: "A nice hat",
    total: 42.78,
    status: "Completed",
    date: new Date("2024-02-11"),
  },
  {
    id: "#0000004",
    description: "A pair of earrings",
    total: 202.78,
    status: "Completed",
    date: new Date("2023-12-31"),
  },
];

export const OrdersContext = createContext({
  orders: [],
  addOrder: ({ description, date, total }) => {},
  deleteOrder: (id) => {},
  updateOrder: (id, { description, date, total, status }) => {},
});

function ordersReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = "#" + Math.floor(Math.random() * 1000000).toString();
      return [{ ...action.payload, id: id, status: "Open" }, ...state];
    case "UPDATE":
      const updateTargetIndex = state.findIndex(
        (order) => order.id === action.payload.id
      );
      const updateTargetOrder = state[updateTargetIndex];
      const updatedOrder = { ...updateTargetOrder, ...action.payload.data };
      const updatedOrders = [...state];
      updatedOrders[updateTargetIndex] = updatedOrder;
      return updatedOrders;
    case "DELETE":
      return state.filter((order) => {
        return order.id !== action.payload;
      });
    default:
      return state;
  }
}

function OrdersContextProvider({ children }) {
  const [ordersState, dispatch] = useReducer(ordersReducer, DUMMY_ORDERS);

  function addOrder(orderData) {
    dispatch({ type: "ADD", payload: orderData });
  }
  function deleteOrder(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateOrder(id, orderData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: orderData } });
  }

  const value = {
    orders: ordersState,
    addOrder: addOrder,
    deleteOrder: deleteOrder,
    updateOrder: updateOrder,
  };

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}

export default OrdersContextProvider;
