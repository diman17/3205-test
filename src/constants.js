import { Link } from "react-router-dom";

export const PAGES = [
    {
        key: "converter",
        label: <Link to="/">Converter</Link>,
    },
    {
        key: "exchange-rates",
        label: <Link to="/exchange-rates">Exchange Rates</Link>,
    },
];

export const templateRegexp = /^\d+ [a-zA-Z]{3} in [a-zA-Z]{3}$/;

export const errorMessages = {
    template:
        "Please follow the request template. For example, '15 usd in rub'",
    code: "Please enter a valid 3-letter currency code",
};

export const defaultCurrencies = {
    AUD: ["en-AU"],
    BRL: ["pt-BR"],
    BYN: ["be"],
    CAD: ["en-CA", "en-CA"],
    CHF: ["fr-CH", "fr-CH", "it-CH"],
    CNY: ["zh", "zh-HK", "zh-TW", "zh-CN"],
    JPY: ["ja"],
    RUB: ["ru"],
    TRY: ["tr"],
    USD: ["en", "en-US"],
};
