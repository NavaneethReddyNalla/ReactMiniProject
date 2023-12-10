import React from "react";
// import { Link } from "react-router-dom";

import "./Card.css";

function Card({ product }) {
  return (
    <div className="card p-1" style={{ height: "350px" }}>
      <img
        src={product.image}
        alt="Card-Display"
        className="card-img-top card-images"
      />
      <div className="card-body">
        <h6 className="card-title lead fs-6">
          <b>{product.title}</b>
        </h6>
      </div>
      <div className="card-footer">
        <button id="btn-details" className="btn">
          Details
        </button>
      </div>
    </div>
  );
}

export default Card;
