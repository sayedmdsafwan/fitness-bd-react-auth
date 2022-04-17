import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import gitLogo from "../../images/remove-git.png";
import googleLogo from "../../images/remove-google.png";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);

    const [signInWithGithub, userGit, loadingGit, errorGit] =
        useSignInWithGithub(auth);

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div
            className="w-25 py-5 mx-auto"
            style={{
                height: "80vh",
            }}
        >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        ref={emailRef}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        ref={passwordRef}
                        placeholder="Password"
                    />
                </Form.Group>
                <p>
                    New to fitnessBD? <Link to="/signup">Click Here</Link> to
                    sign up
                </p>
                <Button variant="outline-dark" className="w-100" type="submit">
                    Submit
                </Button>
                <Button
                    onClick={() => signInWithGoogle()}
                    variant="outline-dark"
                    className="mt-3 w-100"
                >
                    <img
                        src={googleLogo}
                        style={{
                            width: "16px",
                            marginRight: "5px",
                            marginBottom: "4px",
                        }}
                        alt=""
                    />
                    Login With Google
                </Button>
                <Button
                    onClick={() => signInWithGithub()}
                    variant="outline-dark"
                    className="mt-3 w-100"
                >
                    <img
                        style={{
                            width: "16px",
                            marginRight: "5px",
                            marginBottom: "4px",
                        }}
                        src={gitLogo}
                        alt=""
                    />
                    Login With Github
                </Button>
            </Form>
        </div>
    );
};

export default Login;
