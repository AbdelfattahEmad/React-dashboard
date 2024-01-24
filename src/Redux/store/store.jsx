import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../slices/ui-slice";
import CategoryReducer from "../Reducers/CategoryReducer/CategoryReducer"
import SubCategoryReducer from "../Reducers/CategoryReducer/SubCategoryReducer"
import BrandReducer from "../Reducers/BrandReducer";
import ProductReducer from "../Reducers/ProductReducer";
import AuthReducer from "../Reducers/AuthReducer";
import CouponReducer from "../Reducers/CouponReducer";
import ReviewReducer from "../Reducers/ReviewReducer";




const store = configureStore({
    reducer : {
        uiState : uiSlice ,
        CategoryReducer : CategoryReducer,
        SubCategoryReducer:SubCategoryReducer,
        BrandReducer:BrandReducer,
        ProductReducer:ProductReducer,
        AuthReducer:AuthReducer,
        CouponReducer:CouponReducer,
        ReviewReducer:ReviewReducer 

        
    }
})

export default store;