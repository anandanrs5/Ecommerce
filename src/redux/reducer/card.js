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
            const index = state.list.findIndex(
                (product) => product.id === payload.id);
            state.list = [
                // state.list = [10, 20, 30, 40, 50];
                // const newArray = state.list.slice(0, 3);
                // console.log(newArray); // Output: [10, 20, 30]
                ...state.list.slice(0, index), // Output: [10, 20, 30]
                { ...state.list[index], count: payload.count }, // {40, count:1}
                ...state.list.slice(index + 1) // output is 50
                //finally [10,20,30,{40,count:1},50]
            ];
        }
    }
})
export const { addItem, removeItem, modifyItem } = cartSlice.actions;
export default cartSlice.reducer 