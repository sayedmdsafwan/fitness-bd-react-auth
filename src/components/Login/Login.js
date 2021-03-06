import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import gitLogo from "../../images/remove-git.png";
import googleLogo from "../../images/remove-google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorReset] =
        useSendPasswordResetEmail(auth);

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    const handlePass = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Check your inbox to reset password");
        } else {
            toast("Please enter your email address");
        }
    };

    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }

    if (user || userGoogle) {
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading />;
    }

    return (
        <div
            className="w-25 py-5 mx-auto"
            style={{
                minHeight: "80vh",
            }}
        >
            <h1 className="display-6 text-center mb-3">Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        required
                        ref={emailRef}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        required
                        ref={passwordRef}
                        placeholder="Password"
                    />
                </Form.Group>
                <p
                    onClick={handlePass}
                    className="text-primary"
                    style={{
                        cursor: "pointer",
                    }}
                >
                    Forgot password?
                </p>
                <p>
                    New to fitnessBD? <Link to="/signup">Click Here</Link> to
                    sign up
                </p>
                <Button variant="outline-dark" className="w-100" type="submit">
                    Login
                </Button>
                {errorElement}
                <hr />
                <h4 className="text-center">Social Login</h4>
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
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;
