import { createSlice } from '@reduxjs/toolkit';


const filterSlice = createSlice({
    name: 'filter',
    initialState: { filterValue: 'All Category' },
    reducers: {
        addFilter(state, action){
            state.filterValue = action.payload;
        }
    }
});


export const filterActions = filterSlice.actions;


export default filterSlice.reducer;