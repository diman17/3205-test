import axios from "axios";

const BASE_URL = "https://www.cbr-xml-daily.ru/latest.js";

export const fetchRates = async () => {
    const response = await axios.get(BASE_URL);
    const data = response.data;
    data.rates.RUB = 1;
    return data;
};
