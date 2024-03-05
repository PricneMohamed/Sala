import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchSala = createAsyncThunk("SalaClice/fetchSala",async()=>{
    const res = await fetch("https://api.aladhan.com/v1/timingsByCity/03-03-2024?city=%D9%90Alexandeia&country=Egypr&method=8");
    const data = await res.json();
    return data;
})
export const SalaClice =  createSlice({
    initialState:[],
    name:"SalaClice",
    extraReducers:(builder)=>{
        builder.addCase(fetchSala.fulfilled(),(state,actions)=>{
                return actions.payload
        })
    }
})
export const {} = SalaClice.reducer;
export default SalaClice