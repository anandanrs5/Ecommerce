import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './reducer/card'
import userReducer from './reducer/userSlice'

const store = configureStore({
    reducer:{
        cart:cartReducer,
        users:userReducer
    }
})

export default store;