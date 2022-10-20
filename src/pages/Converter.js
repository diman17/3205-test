import { Alert, Button, Card, Input, Modal, Typography } from "antd";
import React, { useState } from "react";

const { Title } = Typography;

function Converter() {
    const regexp = /^\d+ [a-zA-Z]{3} in [a-zA-Z]{3}$/;

    const [value, setValue] = useState("");
    const [status, setStatus] = useState("");

    const showModal = () => {
        Modal.info({
            content: <p>some messages...</p>,
        });
    };

    const submitRequest = () => {
        if (!value) {
            setStatus("error");
            return;
        }

        if (value && !regexp.test(value)) {
            setStatus("error");
            return;
        }

        onSubmitRequest();
        setStatus("");
        showModal();
    };

    const onSubmitRequest = () => {
        const [number] = value.match(/^\d+/);
        const [from] = value.match(/[a-zA-Z]{3}/);
        const [to] = value.match(/[a-zA-Z]{3}$/);
    };

    const onChangeInput = (event) => {
        setStatus("");
        setValue(event.target.value);
    };

    const onCloseAlert = () => {
        setStatus("");
    };

    return (
        <Card style={{ margin: "0 auto", width: "50%" }}>
            <Title>Converter</Title>
            <p>Please, enter a request. For example, '15 usd in rub'</p>
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
                    message="Please, follow the request template. For example, '15 usd in rub'"
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
