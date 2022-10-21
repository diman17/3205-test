import { Alert } from "antd";
import React from "react";
import { errorMessages } from "../constants.js";

function ErrorAlert({ setStatus, isValidCode }) {
    const onCloseAlert = () => {
        setStatus("");
    };

    return (
        <Alert
            onClose={onCloseAlert}
            style={{ marginBottom: "2rem" }}
            type="error"
            message={isValidCode ? errorMessages.template : errorMessages.code}
            banner
            closable
        />
    );
}

export default ErrorAlert;
