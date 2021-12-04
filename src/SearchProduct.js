import React from "react";
import Header from "./Header";

const SearchProduct = () => {
  return (
    <div>
      <Header></Header>
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input className="form-control" type="text" placeholder="Search Product" />
      </div>
    </div>
  );
};

export default SearchProduct;
