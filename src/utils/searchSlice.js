import { createSlice } from "@reduxjs/toolkit";



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