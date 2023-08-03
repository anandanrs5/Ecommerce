import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('gets/getUsers', async () => {
    return await axios.get("https://dummyjson.com/products")
        .then((res) => { return res.data })
})
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        list: []
    },
    reducers: {
        addItem: (state, action) => {
            state.list.push({ ...action.payload, count: 1 })
        },
        removeItem: (state, action) => {
            state.list = state.list.filter((item) => item.id !== action.payload);
        },
        modifyItem: (state, { payload }) => {
            const index = state.list.findIndex (
            ( product ) => product.id === payload.id );
            state.list = [ 
                ...state.list.slice(0, index),
              { ...state.list[index], count: payload.count }, 
                ...state.list.slice(index + 1)
            ];
        }
    }
})
export const { addItem, removeItem, modifyItem } = cartSlice.actions;
export default cartSlice.reducer 