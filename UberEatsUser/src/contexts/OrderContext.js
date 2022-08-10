import { createContext, useContext } from "react";

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {

    const createOrder = () => {
        console.log("Create order");
    }

  return (
    <OrderContext.Provider value={{ createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext); 