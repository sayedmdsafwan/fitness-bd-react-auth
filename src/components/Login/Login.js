import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div
            className="w-25 py-5 mx-auto"
            style={{
                height: "80vh",
            }}
        >
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p>
                    New to fitnessBD? <Link to="/signup">Click Here</Link> to
                    sign up
                </p>
                <Button variant="outline-dark" className="w-100" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;
