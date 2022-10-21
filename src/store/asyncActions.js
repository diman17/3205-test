import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRates } from "../api";

export const fetchAllCurrencies = createAsyncThunk(
    "rates/fetchAllCurrencies",
    async () => {
        const response = await fetchRates();
        return Object.keys(response.rates);
    }
);

export const fetchExchangeRates = createAsyncThunk(
    "rates/fetchExchangeRates",
    async () => {
        const response = await fetchRates();
        return response;
    }
);
