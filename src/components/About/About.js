import React from "react";
import myPic from "../../images/my-pic .jpeg";

const About = () => {
    return (
        <div className="row">
            <div className="col-md-6 p-5">
                <div className="ps-5">
                    <h2>Welcome! I'm Safwan</h2>
                    <h2 className="display-4 my-4">
                        I design and build websites
                    </h2>
                    <p className="lead">
                        Hello, My name is Safwan! I am a freelance Web Designer
                        and WordPress Developer. My job is to build your
                        websites so that it is functional and user friendly but
                        at the same time attractive.
                    </p>
                    <p className="lead mb-4">
                        Building sites with WordPress and react are my bread and
                        butter. I would estimate 95% of the work I do revolves
                        around using WordPress in some way. Even if it is just
                        for the blog I like to incorporate it as it does power
                        over 30% of all websites. Whether it is plugin or theme
                        development. I myself Safwan always excited when it
                        comes to building things in WordPress.
                    </p>
                    <a
                        className="btn btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        href="https://mdsafwan.com"
                    >
                        My Portfolio
                    </a>
                </div>
            </div>
            <div className="col-md-6">
                <img src={myPic} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default About;
