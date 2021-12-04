import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMyAPI();
  }, []);

  const fetchMyAPI = async () => {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  };

  const deleteOperation = async (id) => {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    fetchMyAPI();
  };
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
              <td>
                <span
                  onClick={() => deleteOperation(item.id)}
                  className="delete"
                >
                  Delete
                </span>
              </td>
              <td>
              <Link to={`/update/${item.id}`}>
                <span
                  className="update"
                >
                  Update
                </span>
                </Link>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
