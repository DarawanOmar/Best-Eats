import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: false,
}
const darkModeSlice = createSlice({
    name : 'darkMode',
    initialState,
    reducers : {
        dark : (state) => {
            state.isDark=true;
        },
        night : (state) => {
            state.isDark=false;
        }
    }
    
})


export const {dark , night} = darkModeSlice.actions;

export default darkModeSlice.reducer;
