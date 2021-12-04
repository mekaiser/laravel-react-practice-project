import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import "./App.css";
import Login from "./Login";
import ProductList from "./ProductList";
import Protected from "./Protected";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <h1>Ecommerce Project</h1> */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/add" 
          element={<Protected Component={AddProduct} />}>
          </Route>
          <Route path="/update/:id" element={<UpdateProduct />}></Route>
          <Route path="/" 
          element={<Protected Component={ProductList} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
