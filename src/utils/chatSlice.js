import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        message : []
    },
    reducers : {
        addMessage : (state,action)=>{
             state.message.splice(25,1)
            state.message.unshift(action.payload);
        }
    }

});


export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions;
