import { Card, List, Radio, Typography } from "antd";
import React, { useState } from "react";
import { defaultCurrencies } from "../constants";
import { getCurrencyByUserLang } from "../utils";

const { Title } = Typography;

function ExchangeRates() {
    const [currency, setCurrency] = useState(
        getCurrencyByUserLang(navigator.language)
    );

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
            <List
                itemLayout="horizontal"
                dataSource={Object.keys(defaultCurrencies)}
                renderItem={(item) => (
                    <List.Item>
                        <p>
                            1 {item} = ?? {currency}
                        </p>
                    </List.Item>
                )}
            />
        </Card>
    );
}

export default ExchangeRates;
