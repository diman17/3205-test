import { Alert, Button, Card, Input, Modal, Spin, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorMessages, templateRegexp } from "../constants.js";
import { fetchExchangeRates } from "../store/asyncActions.js";
import { calculateRates } from "../utils.js";

const { Title } = Typography;

function Converter() {
    const [value, setValue] = useState("");
    const [status, setStatus] = useState("");
    const [isValidCode, setIsValidCode] = useState(true);

    const dispatch = useDispatch();
    const { isLoading, currencies } = useSelector((state) => state.rates);

    const showModal = (number, from, to, result) => {
        Modal.info({
            content: (
                <p style={{ fontSize: "1.2rem" }}>
                    {number} {from} = {result} {to}
                </p>
            ),
        });
    };

    const submitRequest = () => {
        const isValidateRequest = validateRequest(value);

        if (!isValidateRequest) {
            return;
        }

        const [number] = value.match(/^\d+/);
        const from = value.match(/[a-zA-Z]{3}/)[0].toUpperCase();
        const to = value.match(/[a-zA-Z]{3}$/)[0].toUpperCase();

        setStatus("");

        dispatch(fetchExchangeRates()).then(({ payload: { rates } }) => {
            if (!isLoading) {
                const result = calculateRates(number, rates[from], rates[to]);

                showModal(number, from, to, result);
            }
        });
    };

    const validateRequest = (value) => {
        if (!value) {
            setIsValidCode(true);
            setStatus("error");
            return false;
        }

        if (value && !templateRegexp.test(value)) {
            setIsValidCode(true);
            setStatus("error");
            return false;
        }

        const from = value.match(/[a-zA-Z]{3}/)[0].toUpperCase();
        const to = value.match(/[a-zA-Z]{3}$/)[0].toUpperCase();

        if (!currencies.includes(from) || !currencies.includes(to)) {
            setIsValidCode(false);
            setStatus("error");
            return false;
        }

        return true;
    };

    const onChangeInput = (event) => {
        setStatus("");
        setValue(event.target.value);
    };

    const onCloseAlert = () => {
        setStatus("");
    };

    if (isLoading) {
        return <Spin style={{ margin: "5rem auto" }} size="large" />;
    }

    return (
        <Card style={{ margin: "0 auto", width: "50%" }}>
            <Title>Converter</Title>
            <p>Please, enter a request. For example, '15 usd in rub'</p>
            <p>Available currencies : {[...currencies].sort().join(", ")}</p>
            <Input
                onChange={onChangeInput}
                onPressEnter={submitRequest}
                style={{ marginBottom: "2rem" }}
                placeholder="15 usd in rub"
                value={value}
                status={status}
                autoFocus
            />
            {status ? (
                <Alert
                    onClose={onCloseAlert}
                    style={{ marginBottom: "2rem" }}
                    type="error"
                    message={
                        isValidCode
                            ? errorMessages.template
                            : errorMessages.code
                    }
                    banner
                    closable
                />
            ) : (
                ""
            )}
            <Button onClick={submitRequest} type="primary">
                Convert
            </Button>
        </Card>
    );
}

export default Converter;
