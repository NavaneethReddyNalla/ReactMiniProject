import React from "react";

function Product({ product }) {
  return (
    <div id="product">
      <div className="img-side">
        <img src={product.image} alt="Product" />
      </div>
      <div className="details">Details</div>
    </div>
  );
}

export default Product;
