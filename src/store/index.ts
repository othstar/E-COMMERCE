import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './Products/Products.slice';
import cartSlice from './Cart/Cart.slice';

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    cart: cartSlice,
  },
});

export default store;
