import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "../../services/productsService";
//Get Products
export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await productsService.get_products();
    return res.data;
  }
);
export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    favoriteItems: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    addFavoriteItems(state, action) {
      state.favoriteItems.push(action.payload);
    },
    removeFavoriteItems(state, action) {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});
export const { addFavoriteItems, removeFavoriteItems } = ProductsSlice.actions;
export default ProductsSlice.reducer;
