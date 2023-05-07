import { configureStore } from "@reduxjs/toolkit";

import ProductsSlice from "./Products/ProductsSlice";
export const store = configureStore({
  reducer: {
    products: ProductsSlice,
  },
});
