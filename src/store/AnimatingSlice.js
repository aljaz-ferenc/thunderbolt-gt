import { createSlice } from "@reduxjs/toolkit";

const AnimatingSlice = createSlice({
    name: "animating",
    initialState: true,
    reducers: {
        setAnimatingState(state, action){
            console.log('animating slice')
            return state = action.payload
        }
    }
})

export const animatingActions = AnimatingSlice.actions;
export const animatingReducer = AnimatingSlice.reducer;