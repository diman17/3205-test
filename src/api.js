import axios from "axios";

const BASE_URL = "https://cdn.cur.su/api/cbr.json";

export const fetchRates = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};
