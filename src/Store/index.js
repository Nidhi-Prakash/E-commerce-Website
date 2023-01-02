import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import filterReducer from './filterSlice';
import searchReducer from './searchSlice';

const store = configureStore({
    reducer: {cart: cartReducer, product: productReducer, filter: filterReducer, search: searchReducer}
});

export default store;