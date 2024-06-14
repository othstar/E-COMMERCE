import { useState, createContext } from 'react';
import {
  CartContextProps,
  CartContexts,
  CartItem,
  Product,
} from '../static/types';

export const CartContext = createContext<null | CartContexts>(null);

const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartState, setCartState] = useState<CartItem[]>([]);

  const updateCart = (num: number, prodd: Product) => {
    console.log(num, prodd.id);

    if (num <= 0) {
      // Remove item from cart if num is 0 or less
      setCartState((prevCartState) =>
        prevCartState.filter((items) => items.item.id !== prodd.id),
      );
    } else {
      // Find the item in the cart
      const itemInCart = cartState.find((items) => items.item.id === prodd.id);

      if (itemInCart) {
        // Update the amount if item exists in cart
        setCartState((prevCartState) =>
          prevCartState.map((items) =>
            items.item.id === prodd.id ? { ...items, amount: num } : items,
          ),
        );
      } else {
        // Add new item to the cart if it does not exist
        setCartState((prevCartState) => [
          ...prevCartState,
          { amount: num, item: prodd },
        ]);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cartState, setCartState, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
