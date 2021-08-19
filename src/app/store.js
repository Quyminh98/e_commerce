import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducer/cartSlice.js';
import listReducer from './reducer/listSlice.js'

const rootReducer = {
    cart: cartReducer,
    list: listReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;