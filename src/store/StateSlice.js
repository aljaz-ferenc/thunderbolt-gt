import { createSlice } from "@reduxjs/toolkit";
let previousTime = 0

const stateSlice = createSlice({
    name: "state",
    initialState: null,
    reducers: {
        stateUp: (state, action) => {
            return state === null ? 1 : state +=1;
        },
        stateDown: (state, action) => {
            return state -= 1;
        }
    }
})

export const stateActions = stateSlice.actions;
export const stateReducer = stateSlice.reducer;