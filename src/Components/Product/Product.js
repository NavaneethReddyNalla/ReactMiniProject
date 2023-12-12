import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div id="product" className="p-3">
      <div className="img-side text-center">
        <img src={product.image} alt="Product" />
      </div>
      <div className="details text-white">
        <h2>{product.title}</h2>
        <h5>Price: {product.price}$</h5>
        <p>{product.description}</p>
        <h2>Rating: {product.rating.rate} / 5</h2>
      </div>
      <Link to="/" className="btn text-white back-btn">
        ← Back
      </Link>
    </div>
  );
}

export default Product;
