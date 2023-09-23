import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk('gets/getUsers', async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data?.products;
})
const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        users: []
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.loading = false
        })
        builder.addCase([getUsers.rejected], (state, action) => {
            state.users = []
            state.loading = false
    });}
})
export default userSlice.reducer;