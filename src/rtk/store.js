import { configureStore } from "@reduxjs/toolkit";
import SalaClice from "./Slice";

export const store = configureStore({
    reducer:{
        sala:SalaClice.reducer
    }
})