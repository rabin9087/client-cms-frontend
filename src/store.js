import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./pages/products/productSlice";
import categoryReducer from "./pages/category/categorySlice";
import orderReducer from "./pages/order/orderSlice";
import addToCartReducer from "./pages/addToCart/addToCartSlice";

export default configureStore({
    reducer: {
        categoryInfo: categoryReducer,
        productInfo: productReducer,
        addToCartInfo: addToCartReducer,
        orderInfo: orderReducer
    }
})