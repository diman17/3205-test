import { defaultCurrencies } from "./constants";

export const calculateRates = (number, from, to) => {
    return ((number * to) / from).toFixed(2);
};

export const getCurrencyByUserLang = (lang) => {
    for( let key in defaultCurrencies) {
        if(defaultCurrencies[key].includes(lang)) {
            return key
        }
    }
}
