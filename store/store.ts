import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice"
const store = configureStore({
    reducer: {
       cart:cartReducer,
    },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AddDispach = typeof store.dispatch;
export default store;