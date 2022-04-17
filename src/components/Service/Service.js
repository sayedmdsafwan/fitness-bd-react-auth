import React from "react";

const Service = ({ service }) => {
    const { name, price, img, description } = service;

    return (
        <div className="card col-md-3 m-4 g-0 shadow-sm">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p>
                    <small>Price: ${price}</small>
                </p>
                <button className="text-capitalize btn btn-outline-dark w-100">
                    Buy this package
                </button>
            </div>
        </div>
    );
};

export default Service;
