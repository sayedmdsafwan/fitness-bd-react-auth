import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner1.jpeg";
import banner2 from "../../images/banner2.jpeg";

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{
                            height: "85vh",
                        }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-start display-5">Work Hard</h3>
                        <p className="lead text-start">
                            Do not give up on your dreams, or your
                            <br />
                            dreams will give up on you.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            height: "85vh",
                        }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-end display-5">No Pain No Gain</h3>
                        <p className="lead text-end">
                            The only person you are destined to become
                            <br />
                            is the person you decide to be
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
