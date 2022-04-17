import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import gitLogo from "../../images/remove-git.png";
import googleLogo from "../../images/remove-google.png";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);

    const [signInWithGithub, userGit, loadingGit, errorGit] =
        useSignInWithGithub(auth);
    return (
        <div>
            <div
                className="w-25 py-5 mx-auto"
                style={{
                    height: "78vh",
                }}
            >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
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
        </div>
    );
};

export default Register;
