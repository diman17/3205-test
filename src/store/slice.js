import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCurrencies, fetchExchangeRates } from "./asyncActions";

const initialState = {
    isLoading: false,
    currencies: [],
    rates: [],
};

const ratesSlice = createSlice({
    name: "rates",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllCurrencies.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllCurrencies.fulfilled, (state, action) => {
            state.currencies = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchExchangeRates.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchExchangeRates.fulfilled, (state, action) => {
            state.rates = action.payload.rates;
            state.isLoading = false;
        });
    },
});

export default ratesSlice.reducer;
