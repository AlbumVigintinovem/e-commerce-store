import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import productSlice from "./product-slice";
import filterSlice from "./filter-slice";

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer, products: productSlice.reducer, filter: filterSlice.reducer }
});

export default store;