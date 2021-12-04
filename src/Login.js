import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("user-info") &&
      !JSON.parse(localStorage.getItem("user-info")).error
    ) {
      navigate("/add");
    }
  }, []);
  const logIn = async () => {
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();

    if (!result.error) {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/add");
    }
  };
  return (
    <div>
      <Header></Header>
      <h1>Login Page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          text="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        ></input>
        <br />
        <input
          text="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        ></input>
        <br />
        <button onClick={logIn} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
