import { createSlice } from "@reduxjs/toolkit";
import { addDataToState, setData, changeMaxResults } from "../actions/actionState";

interface IStateSlice {
    data: any[],
    maxResults: number,
}

const initialState: IStateSlice = {
    data: [],
    maxResults: 0
}

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(setData, (state, action) => {
                if (action.payload) {
                    state.data = [...action.payload]
                } else {
                    state.data = []
                }   
            })
            .addCase(addDataToState, (state, action) => {
                state.data = [...state.data, ...action.payload]
            })
            .addCase(changeMaxResults, (state, action) => {
                state.maxResults = action.payload
            })
    }
})

export default stateSlice.reducer;