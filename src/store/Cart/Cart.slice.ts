import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem, Product } from '../../static/types';

type InitialState = {
  value: CartItem[];
};

const initialState: InitialState = {
  value: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (
      state,
      action: PayloadAction<{ num: number; product: Product }>,
    ) => {
      const { num, product } = action.payload;

      if (num <= 0) {
        // Remove item from cart if num is 0 or less
        state.value = state.value.filter(
          (items) => items.item.id !== product.id,
        );
      } else {
        // Find the item in the cart
        const itemInCart = state.value.find(
          (items) => items.item.id === product.id,
        );

        if (itemInCart) {
          // Update the amount if item exists in cart
          itemInCart.amount = num;
        } else {
          // Add new item to the cart if it does not exist
          state.value.push({ amount: num, item: product });
        }
      }
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { updateCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
