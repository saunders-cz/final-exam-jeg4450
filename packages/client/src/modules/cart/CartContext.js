import { createContext, useContext, useState } from "react";

const context = createContext({});

export const CartService = ({ children }) => {
  const [state, setState] = useState({
    items: [],
    hasItems: false,
    itemCount: 0,
    getTotalPrice: () => {
      let items = [...state.items];
      let sum = 0;
      console.log(items);
      items.forEach((item) => {
        sum += items.find((i) => i.id === item.id).price;
      });
      return sum;
    },
  });

  const addItem = (foodItemId) => {
    let items = [...state.items];
    console.log(items);
    const existingItem = items.find((i) => i.id === foodItemId);
    if (existingItem !== undefined) {
      existingItem.qty++;
      setState({
        ...state,
        items,
        hasItems: true,
        itemCount: getItemCount(items),
      });
    } else {
      items = [...items, { id: foodItemId, qty: 1 }];
      setState({
        ...state,
        items,
        hasItems: true,
        itemCount: getItemCount(items),
      });
    }
  };

  const updateItemQuantity = (foodItemId, newQuantity) => {
    const items = [...state.items];
    const item = items.find((item) => item.id === foodItemId);

    if (item === undefined) {
      console.error(`Item not found!`);
      return;
    }

    if (newQuantity === 0) {
      items.splice(
        items.findIndex((i) => i.id === foodItemId),
        1
      );
    } else {
      item.qty = newQuantity;
    }

    setState({
      ...state,
      items,
    });
  };

  const getItemCount = (items) => {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      count += item.qty;
    }
    return count;
  };

  return (
    <context.Provider
      value={{
        ...state,
        addItem,
        updateItemQuantity,
      }}
    >
      {children}
    </context.Provider>
  );
};
export const CartConsumer = context.Consumer;

export const useCart = () => useContext(context);
