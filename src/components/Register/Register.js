import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { async } from "@firebase/util";
import Loading from "../Loading/Loading";

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const nameRef = useRef("");

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = emailRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate("/");
    };

    if (loading || updating) {
        return <Loading />;
    }

    return (
        <div>
            <div
                className="w-25 py-5 mx-auto"
                style={{
                    height: "78vh",
                }}
            >
                {" "}
                <h1 className="display-6 text-center mb-3">SignUp</h1>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            ref={nameRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            required
                            placeholder="Enter email"
                            ref={emailRef}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            ref={passwordRef}
                        />
                    </Form.Group>
                    <p>
                        Already have an account?{" "}
                        <Link to="/login">Click Here</Link> to login
                    </p>
                    <Button
                        variant="outline-dark"
                        className="w-100"
                        type="submit"
                    >
                        SignUp
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;
