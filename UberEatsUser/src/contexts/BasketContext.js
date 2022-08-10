import { createContext, useContext, useState} from "react";

const BasketContext = createContext({})

const BasketContextProvider = ({ children }) => {

    const [restaurant, setRestaurant] = useState();

    const addDishToBasket = (dish, quantity) => {
        console.log("Add dish to basket", dish, quantity);
    }

    return (
      <BasketContext.Provider value={{ addDishToBasket, setRestaurant }}>
        {children}
      </BasketContext.Provider>
    );
}

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);