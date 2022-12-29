import { createSlice } from '@reduxjs/toolkit';


const initialCartState = { productDetails: [] }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart(state, action) {
            action.payload.addedToCart = true;
            state.productDetails = [...state.productDetails, {
                name: action.payload.name,
                price: action.payload.price.value,
                category: action.payload.categoryName,
                image: action.payload.images[0].url,
                currency: action.payload.price.currencyIso,
                key: action.payload.key,
                addToCart: true
            }]
        },

        removeFromCart(state, action) {
            action.payload.product.addedToCart = false;
            state.productDetails = state.productDetails.filter((item) => !(item.key === action.payload?.selectedProduct.key))
        }
    }
});


export const cartActions = cartSlice.actions;


export default cartSlice.reducer;