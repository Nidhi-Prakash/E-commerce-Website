import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cartProductDetails: [] },
    reducers: {
        addToCart(state, action) {
            state.cartProductDetails = [...state.cartProductDetails, {
                name: action.payload.name,
                price: action.payload.price.value,
                category: action.payload.categoryName,
                image: action.payload.images[0].url,
                currency: action.payload.price.currencyIso,
                key: action.payload.key,
                quantity:1
            }]
        },

        removeFromCart(state, action) {
            state.cartProductDetails = state.cartProductDetails.filter((item) => !(item.key === action.payload?.selectedProductKey))
        },

        increaseQuantity(state, action) {
            for(let i=0;i<state.cartProductDetails.length;i++) {
                if(state.cartProductDetails[i].key === action.payload.itemKey) 
                    state.cartProductDetails[i].quantity++;
            }
        },

        decreaseQuantity(state, action) {
            for(let i=0;i<state.cartProductDetails.length;i++) {
                if(state.cartProductDetails[i].key === action.payload.itemKey)
                    if([state.cartProductDetails[i].quantity] > 0) 
                        state.cartProductDetails[i].quantity--;
            }
        }
    }
});


export const cartActions = cartSlice.actions;


export default cartSlice.reducer;