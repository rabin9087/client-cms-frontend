import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { getAllCategoriesAction } from "./pages/category/categoryAction";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "./pages/products/productAction";
import ProductLanding from "./components/ProductLanding";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductLanding />} />
      </Routes>
    </div>
  );
}

export default App;
