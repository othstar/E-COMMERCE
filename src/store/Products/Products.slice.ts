//@ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import data from "../../Json/data.json";
import { Product } from "../../types/types";

const selectProductsState = (state) => state.products;

export const selectProducts = createSelector(
  selectProductsState,
  (productsState) => productsState.items
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return data as Product[];
  }
);

const initialState = {
  items: [] as Product[],
  status: "idle",
  error: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ProductsSlice.reducer;
