import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { getAllCategoriesAction } from "./pages/category/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./pages/products/productAction";
import ProductLanding from "./components/ProductLanding";
import AddToCart from "./pages/addToCart/AddToCart";
import Bats from "./pages/bats/Bats";
import Cloths from "./pages/cloths/Cloths";
import Shoes from "./pages/shoes/Shoes";
import Gloves from "./pages/gloves/Gloves";
import Pads from "./pages/pads/Pads";

function App() {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.categoryInfo);
  const { productList } = useSelector((state) => state.productInfo);

  const bats = productList.filter(
    (item) => item.parentCatId === categoryList[0]?._id
  );

  const gloves = productList.filter(
    (item) => item.parentCatId === categoryList[1]?._id
  );
  const shoes = productList.filter(
    (item) => item.parentCatId === categoryList[2]?._id
  );
  const pads = productList.filter(
    (item) => item.parentCatId === categoryList[3]?._id
  );
  const cloths = productList.filter(
    (item) => item.parentCatId === categoryList[4]?._id
  );
  console.log(bats, gloves, pads, cloths, shoes);
  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductLanding />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/bats" element={<Bats product={categoryList[0]} />} />
        <Route path="/gloves" element={<Gloves product={categoryList[1]} />} />
        <Route path="/shoes" element={<Shoes product={categoryList[2]} />} />
        <Route path="/pads" element={<Pads product={categoryList[3]} />} />
        <Route path="/cloths" element={<Cloths product={categoryList[4]} />} />
      </Routes>
    </div>
  );
}

export default App;
