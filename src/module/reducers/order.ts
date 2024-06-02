import { createSlice } from "@reduxjs/toolkit";
import { listorder, orderFertilizer,ordercount, updateOrder } from "../actions/data";

export const orderlice = createSlice({
    name: "data",
    initialState: {
    
        order:{
            status:"",
            values:""
        },
        listorder:{
            status:"",
            values:[]
        },
        update:{},
        count:0

    },
    reducers: {
        clearSuccessMessage: (state, payload) => {
            // TODO: Update state to clear success message
        }
    },
    extraReducers: (builder) => {
        
        builder.addCase(orderFertilizer.fulfilled, (state, payload:any ) => {
            state.order.status = payload.type
            state.order.values = payload.meta.arg
        });
        builder.addCase(listorder.fulfilled, (state, payload:any ) => {
            state.listorder.status = payload.type
            state.listorder.values = payload.payload
        });
        builder.addCase(ordercount.fulfilled, (state, {payload} ) => {
            state.count = payload
        });
        builder.addCase(updateOrder.fulfilled, (state, payload ) => {
            state.update = payload
        });
      },
})

export default orderlice.reducer

  