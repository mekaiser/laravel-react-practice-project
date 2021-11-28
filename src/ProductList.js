import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMyAPI = async () => {
      let result = await fetch("http://localhost:8000/api/list");
      result = await result.json();
      setData(result);
    };
    fetchMyAPI();
  }, []);
  console.warn("result", data);
  return (
    <div>
      <Header></Header>
      <h1>Product List</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
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
                />
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
