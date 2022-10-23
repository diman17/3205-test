import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Converter from "./pages/converter/Converter";
import ExchangeRates from "./pages/exchangeRates/ExchangeRates";
import Error from "./pages/error/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Converter />,
            },
            {
                path: "exchange-rates",
                element: <ExchangeRates />,
            },
        ],
    },
]);
