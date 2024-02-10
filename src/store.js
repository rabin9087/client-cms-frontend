import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./pages/products/productSlice";
import categoryReducer from "./pages/category/categorySlice";
import orderReducer from "./pages/order/order";

export default configureStore({
    reducer: {
        categoryInfo: categoryReducer,
        productInfo: productReducer,
        orderInfo: orderReducer
    }
})