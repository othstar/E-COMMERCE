import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../static/types';
import { getProducts } from './Products.async.Actions';

type InitialState = {
  status: 'idle' | 'loading' | 'loaded' | 'failed';
  data: Product[];
  error: undefined | string;
};

const initialState: InitialState = {
  data: [],
  status: 'idle',
  error: undefined,
};

const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = 'loaded';
      if (action.payload) {
        state.data = action.payload;
      }
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default ProductsSlice.reducer;
