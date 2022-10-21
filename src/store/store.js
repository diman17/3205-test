import { configureStore } from "@reduxjs/toolkit";
import ratesReducer from "./slice";

export const store = configureStore({
    reducer: {
        rates: ratesReducer,
    },
});
