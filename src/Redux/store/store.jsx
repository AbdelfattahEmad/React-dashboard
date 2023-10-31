import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui-slice";


const store = configureStore({
    reducer : {
        uiState : uiSlice
    }
})

export default store;