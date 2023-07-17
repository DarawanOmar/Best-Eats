import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from './DarkModeSlice'

export const store = configureStore({
    reducer: {
        dark : darkModeSlice
    }
})