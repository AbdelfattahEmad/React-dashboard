import { createSlice } from "@reduxjs/toolkit";

const uiState = {
    sideMenuCollapsed : false
}

const uiSlice = createSlice({
    name:'uiState',
    initialState : uiState,
    reducers : {
        toggleSidebar(state,action){
            state.sideMenuCollapsed = !state.sideMenuCollapsed;
        }
    }

});

export  const uiActions = uiSlice.actions;

export default uiSlice.reducer;