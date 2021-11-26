import React, { useState } from "react";
import Header from "./Header";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const addProduct = async () => {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("file-name", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);
    let result = await fetch("http://localhost:8000/api/addProduct", {
      method: "POST",
      body: formData,
    });
    alert("Data has been saved successfully");
  };
  return (
    <div>
      <Header></Header>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <br />
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          placeholder="file"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          placeholder="price"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="description"
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
