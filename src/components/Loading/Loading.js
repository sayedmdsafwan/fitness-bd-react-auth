import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <div
            className="d-flex w-100 justify-content-center align-items-center"
            style={{ height: "80vh" }}
        >
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;
