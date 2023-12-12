import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

function Card({ product, setProduct }) {
  function handleClick(event) {
    setProduct(product);
  }

  return (
    <div className="card p-1" style={{ height: "350px" }}>
      <img
        src={product.image}
        alt="Card-Display"
        className="card-img-top card-images"
      />
      <div className="card-body">
        <h6 className="card-title lead fs-6">
          <b>
            {product.title.length > 79 && product.title.slice(0, 80) + "..."}
            {product.title.length <= 79 && product.title}
          </b>
        </h6>
      </div>
      <div className="card-footer text-center">
        <Link
          to={`/${product.id}`}
          id="btn-details"
          className="btn"
          onClick={handleClick}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
