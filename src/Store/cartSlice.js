import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cartProductDetails: [] },
    reducers: {
        addToCart(state, action) {
            state.cartProductDetails = [...state.cartProductDetails, {
                name: action.payload.cardDetailsData.name,
                price: action.payload.cardDetailsData.price.value,
                category: action.payload.cardDetailsData.categoryName,
                image: action.payload.cardDetailsData.images[0].url,
                currency: action.payload.cardDetailsData.price.currencyIso,
                key: action.payload.cardDetailsData.key,
                quantity:1,
                productSize: action.payload.productSize
            }]
        },

        removeFromCart(state, action) {
            state.cartProductDetails = state.cartProductDetails.filter((val,index) => (index !== action.payload.indx) )
        },

        increaseQuantity(state, action) {
            state.cartProductDetails[action.payload.indx].quantity++;
        },

        decreaseQuantity(state, action) {
            if(state.cartProductDetails[action.payload.indx].quantity > 0) 
            state.cartProductDetails[action.payload.indx].quantity--;
        }
    }
});


export const cartActions = cartSlice.actions;


export default cartSlice.reducer;