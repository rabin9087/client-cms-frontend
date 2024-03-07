import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./pages/products/productSlice";
import categoryReducer from "./pages/category/categorySlice";
import orderReducer from "./pages/order/orderSlice";
import addToCartReducer from "./pages/addToCart/addToCartSlice";
import userReducer from "./pages/sign-in-up/userSlice";

export default configureStore({
    reducer: {
        userInfo: userReducer,
        categoryInfo: categoryReducer,
        productInfo: productReducer,
        addToCartInfo: addToCartReducer,
        orderInfo: orderReducer
    }
})