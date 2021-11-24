import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <h1>Ecommerce Project</h1>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/update" element={<UpdateProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
