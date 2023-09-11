import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filteredData: {
        },
        isFiltered: 0,
    },
    reducers: {
        filterData(state, action) {
            const newItem = action.payload;
            state.filteredData = { searchTerm: newItem.searchTerm, category: newItem.category, star: newItem.star, minPrice: newItem.minPrice, maxPrice: newItem.maxPrice };
            state.isFiltered++
        },
        isFilteredHandler(state) {
            state.isFiltered = 0;
        }
    }
})

export const filterActions = filterSlice.actions;
export default filterSlice;