import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { getAllCategoriesAction } from "./pages/category/categoryAction";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "./pages/products/productAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-center"></div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
