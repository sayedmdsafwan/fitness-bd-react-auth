import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import figure from "../../images/fig-9.jpeg";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className="container">
                <h3 className="display-6 text-center my-4">Why Choose us?</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid w-100" src={figure} alt="" />
                    </div>
                    <div className="col-md-6 p-4 d-flex align-items-center">
                        <div>
                            <h3 className="text-uppercase">
                                we deliver best quality
                            </h3>
                            <p className="lead">
                                To get something you never had, <br />
                                You have to do something you never did{" "}
                            </p>
                            <p>
                                This gym system boasts a high durable steel
                                frame reinforced with a powder coating, giving
                                you an equipment that is to withstand intense
                                use. Its industrial style combines safety and
                                superior functionality.
                            </p>
                            <p>
                                Equipped with multi-grip pull-up handles
                                furnished with sturdy foam pads, dip bars, and
                                adjustable safety catches, this innovative piece
                                of workout gear lets you efficiently perform
                                bicep curls, pull ups, and presses.
                            </p>
                            <p>
                                Featuring a spacious workout station, this
                                high-performing equipment includes sturdy posts
                                and trays to let you organize your dumbbell set,
                                kettlebells, Olympic weight plates, and other
                                weightlifting gear on the rack.
                            </p>
                            <p>
                                This gym system combines different
                                strength-building machines. This complete system
                                features dip bars, a pull-up bar, a kipping bar,
                                resistance band anchors, and barbell safety
                                catches everything you need for a full-body
                                workout
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
