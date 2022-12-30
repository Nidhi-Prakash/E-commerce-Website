import { createSlice } from '@reduxjs/toolkit';
import { product_count } from '../fetchFromAPI/api';


const productSlice = createSlice({
    name: 'product',
    initialState: { productDetails: new Array(product_count).fill({isFavorite:false}) },
    reducers: {
        heartAction(state, action) {
            state.productDetails[action.payload.indx].isFavorite = !(state.productDetails[action.payload.indx].isFavorite)
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice.reducer;