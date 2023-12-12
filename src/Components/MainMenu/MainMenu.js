import React from "react";
import { useState } from "react";
import Card from "../Card/Card";

function MainMenu({ products, setProduct }) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        className="form-control m-auto mt-3 mb-3 w-50"
        placeholder="Search by product name"
        onChange={handleSearch}
      />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-6 g-3 p-3">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => {
            return (
              <div className="col" key={product.id}>
                <Card product={product} setProduct={setProduct} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MainMenu;
