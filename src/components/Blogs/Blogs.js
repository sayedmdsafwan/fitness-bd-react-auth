import React from "react";

const Blogs = () => {
    return (
        <div className="w-50 mx-auto my-5">
            <h1 className="text-center mb-4 ">Blogs</h1>
            <h2>Difference between authorization and authentication</h2>
            <p className="mb-5">
                Authentication means the identity of the user. On the other hand
                authorization means which file type or service or specific
                application can use the user. This is called authorization
            </p>
            <h2>
                Why are you using firebase? What other options do you have to
                implement authentication?
            </h2>
            <p className="mb-5">
                Firebase offering web development and mobile app development
                service to the developer. It also provides some useful
                funcionality likes authentication, hosting etc. There are many
                firebase alternatives, likes auth0, okta, amazon cognito etc.
            </p>
            <h2>
                What other services does firebase provide other than
                authentication
            </h2>
            <p className="mb-5">
                Firebase is very useful for developer to develop mobile and web
                application. Firebase not only offers authentication, it also
                offers some extraordinary features like,Cloud Firestore, Cloud
                Functions, Hosting, Cloud Storage, Google Analytics,
                Predictions, Cloud Messaging.
            </p>
        </div>
    );
};

export default Blogs;
