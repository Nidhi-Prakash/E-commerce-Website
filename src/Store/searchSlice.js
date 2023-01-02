import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: { searchValue: 'null'},
    reducers: {
        addSearch(state, action) {
            state.searchValue = action.payload;
        }
    }
});


export const searchActions = searchSlice.actions;


export default searchSlice.reducer;