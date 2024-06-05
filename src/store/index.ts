import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './Products/Products.slice';

const store = configureStore({
  reducer: {
    products: ProductsSlice,
  },
});

export default store;
