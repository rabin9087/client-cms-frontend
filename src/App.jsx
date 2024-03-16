import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./pages/products/productAction";
import ProductLanding from "./components/ProductLanding";
import AddToCart from "./pages/addToCart/AddToCart";
import Bats from "./pages/bats/Bats";
import Cloths from "./pages/cloths/Cloths";
import Shoes from "./pages/shoes/Shoes";
import { ToastContainer } from "react-toastify";
import Category from "./pages/category/Category";
import SignIn from "./pages/sign-in-up/SignIn";
import Payment from "./pages/payment/Payment";
import Orders from "./pages/order/Orders";
import SignUp from "./pages/sign-in-up/SignUp";
import { fetchUserProfile } from "./pages/sign-in-up/userAction";
import Balls from "./pages/balls/Balls";
import Protection from "./pages/protection/Protection";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchAllProducts());
    window.scrollTo(0, 0);
  }, [dispatch, user?._id]);

  return (
    <div className="app">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductLanding />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/bats" element={<Bats />} />
        <Route path="/protection" element={<Protection />} />
        <Route path="/cloths" element={<Cloths />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/balls" element={<Balls />} />
        <Route path="/trending" element={<Category />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
