import { createSlice } from "@reduxjs/toolkit";
import { postData } from "../actions/data";

export const authSlice = createSlice({
    name: "data",
    initialState: {
    
        user:{
            status:"",
            values:""
        }

    },
    reducers: {
        clearSuccessMessage: (state, payload) => {
            // TODO: Update state to clear success message
        }
    },
    extraReducers: (builder) => {
        
        builder.addCase(postData.fulfilled, (state, { payload }) => {
            state.user.status = payload.message
            state.user.values = payload.data
        });
      },
})

export default authSlice.reducer

  