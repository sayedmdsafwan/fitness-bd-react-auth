import React from "react";

const Footer = () => {
    return (
        <div className="py-4 text-center text-light bg-dark">
            Copyright &copy; {new Date().getFullYear()}
        </div>
    );
};

export default Footer;
