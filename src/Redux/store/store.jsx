import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../slices/ui-slice";
import CategoryReducer from "../Reducers/CategoryReducer/CategoryReducer"


const store = configureStore({
    reducer : {
        uiState : uiSlice ,
        CategoryReducer : CategoryReducer
    }
})

export default store;