import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const searchSlice = createSlice({
    name : "search",
    initialState : {
        
    },
    reducers : {
        cachingResult : (state,action)=>{
            state = Object.assign(state,action.payload)
        }
    } 
})


export const {cachingResult} = searchSlice.actions;
export default searchSlice.reducer;