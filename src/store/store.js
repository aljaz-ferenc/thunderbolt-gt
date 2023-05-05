import { configureStore } from "@reduxjs/toolkit";
import { stateReducer } from "./StateSlice";
import { animatingReducer } from "./AnimatingSlice";

const store = configureStore({
    reducer: {
        state: stateReducer,
        animating: animatingReducer
    }
});

export default store;