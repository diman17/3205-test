import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Converter from "./pages/Converter";
import ExchangeRates from "./pages/ExchangeRates";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
