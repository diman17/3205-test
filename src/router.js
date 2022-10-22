import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Converter from "./pages/Converter";
import ExchangeRates from "./pages/ExchangeRates";
import Error from "./pages/Error";

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
