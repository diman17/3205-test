import { Card, List, Radio, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultCurrencies } from "../constants";
import { fetchExchangeRates } from "../store/asyncActions";
import { calculateRates, getCurrencyByUserLang } from "../utils";

const { Title } = Typography;

function ExchangeRates() {
    const [currency, setCurrency] = useState(
        getCurrencyByUserLang(navigator.language)
    );

    const dispatch = useDispatch();
    const { isLoading, rates } = useSelector((state) => state.rates);

    useEffect(() => {
        dispatch(fetchExchangeRates());
    }, [dispatch, currency]);

    const onRadioChange = ({ target: { value } }) => {
        setCurrency(value);
    };

    return (
        <Card style={{ margin: "0 auto", width: "50%" }}>
            <Title>Exchange Rates</Title>
            <Radio.Group onChange={onRadioChange} defaultValue={currency}>
                {Object.keys(defaultCurrencies).map((key) => (
                    <Radio.Button
                        style={{ marginBottom: "0.5rem" }}
                        key={key}
                        value={key}
                    >
                        {key}
                    </Radio.Button>
                ))}
            </Radio.Group>
            {isLoading ? (
                <Spin
                    style={{ margin: "5rem calc(50% - 16px)" }}
                    size="large"
                />
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={Object.keys(defaultCurrencies)}
                    renderItem={(item) => {
                        if (item === currency) {
                            return "";
                        }
                        return (
                            <List.Item>
                                <p>
                                    1 {item} = {calculateRates(1,rates[item],rates[currency])} {currency}
                                </p>
                            </List.Item>
                        );
                    }}
                />
            )}
        </Card>
    );
}

export default ExchangeRates;
