import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";

const SearchProduct = () => {
  const [data, setData] = useState([]);
  const search = async (key) => {
    let fetchSuccess = false;
    let result = await fetch("http://localhost:8000/api/search/" + key);
    if (!key) {
      setData([]);
    }
    result = await result.json();
    fetchSuccess = true;
    if (fetchSuccess) {
      setData(result);
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          className="form-control"
          type="text"
          onChange={(e) => search(e.target.value)}
          placeholder="Search Product"
        />
        <Table>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operations</td>
          </tr>
          {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    style={{ width: "100px" }}
                    src={"http://localhost:8000/" + item.file_path}
                    alt="product_image"
                  />
                </td>
              </tr>
            ))}
        </Table>
      </div>
    </div>
  );
};

export default SearchProduct;
