import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../slices/ui-slice";
import CategoryReducer from "../Reducers/CategoryReducer/CategoryReducer"
import SubCategoryReducer from "../Reducers/CategoryReducer/SubCategoryReducer"




const store = configureStore({
    reducer : {
        uiState : uiSlice ,
        CategoryReducer : CategoryReducer,
        SubCategoryReducer:SubCategoryReducer

    }
})

export default store;