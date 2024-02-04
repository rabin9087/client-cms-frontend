import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./pages/products/productSlice";
import categoryReducer from "./pages/category/categorySlice";

export default configureStore({
    reducer: {
        categoryInfo: categoryReducer,
        productInfo: productReducer,
    }
})