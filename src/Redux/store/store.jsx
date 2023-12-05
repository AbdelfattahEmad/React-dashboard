import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../slices/ui-slice";
import CategoryReducer from "../Reducers/CategoryReducer/CategoryReducer"
import SubCategoryReducer from "../Reducers/CategoryReducer/SubCategoryReducer"
import BrandReducer from "../Reducers/BrandReducer";




const store = configureStore({
    reducer : {
        uiState : uiSlice ,
        CategoryReducer : CategoryReducer,
        SubCategoryReducer:SubCategoryReducer,
        BrandReducer:BrandReducer
    

    }
})

export default store;