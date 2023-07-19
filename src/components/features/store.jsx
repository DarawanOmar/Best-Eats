import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from './Dark-Mode/DarkModeSlice'
import countSlice from './Count/CountSlice'


export const store = configureStore({
    reducer: {
        dark : darkModeSlice,
        count : countSlice,
    }
})