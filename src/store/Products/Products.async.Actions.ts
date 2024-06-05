import { createAsyncThunk } from '@reduxjs/toolkit';
import getData from '../../config/api';
import { Product } from '../../static/types.ts';

export const getProducts = createAsyncThunk(
  '/products/getProducts',
  async (_, ThunkApi) => {
    try {
      const response = await getData.get<Product[]>(`/product/getProducts`);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        ThunkApi.rejectWithValue(error.message);
      } else {
        ThunkApi.rejectWithValue('Unknown Error Happened!');
      }
    }
  },
);
