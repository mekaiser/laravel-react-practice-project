import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const signUp = async () => {
    let item = { name, password, email };
    // console.warn(item);

    let result = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(item)
    })

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  };

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="name"
      ></input>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
      ></input>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      ></input>
      <br />
      <button onClick={signUp} className="btn btn-primary">
        Sign Up
      </button>
    </div>
  );
};

export default Register;
