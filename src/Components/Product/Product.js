import React from "react";
import "./Product.css";

function Product({ product }) {
  return (
    <div id="product">
      <div className="img-side text-center">
        <img src={product.image} alt="Product" />
      </div>
      <div className="details text-white">
        <h2>{product.title}</h2>
        <h5>Price: {product.price}$</h5>
        <p>{product.description}</p>
        <h2>Rating: {product.rating.rate} / 5</h2>
      </div>
    </div>
  );
}

export default Product;
