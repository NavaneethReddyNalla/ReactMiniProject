import React from "react";
// import { Link } from "react-router-dom";

import "./Card.css";

function Card({ product }) {
  return (
    <div className="card" style={{ height: "350px" }}>
      <img
        src={product.image}
        alt="Card-Display"
        className="card-img-top card-images"
      />
      <div className="card-body">
        <h6 className="card-title lead fs-6">{product.title}</h6>
      </div>
      <div className="card-footer">
        <button className="btn btn-success">Details</button>
      </div>
    </div>
  );
}

export default Card;
