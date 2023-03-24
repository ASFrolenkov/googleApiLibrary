import { createSlice } from "@reduxjs/toolkit";
import { ILocal } from "../../types/types";
import { addCategories, addSearch, addOrder, addTabIndex } from "../actions/actionsFetch";

const initialState: ILocal = {
    tabIndex: 0,
    search: '',
    categories: '',
    order: 'relevance',
    numberResults: 30,
    resetflag: false
}

export const fetchSlice = createSlice({
    name: 'fetchState',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addSearch, (state, action) => {
                state.search = action.payload
                state.resetflag = true
            })
            .addCase(addOrder, (state, action) => {
                state.order = action.payload
                state.resetflag = true
            })
            .addCase(addCategories, (state, action) => {
                state.categories = action.payload
                state.resetflag = true
            })
            .addCase(addTabIndex, (state) => {
                state.tabIndex += state.numberResults
                state.resetflag = false
            })
    }
    
})

export default fetchSlice.reducer;
