import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../Reducers/CartSlice';

export const CartStore = configureStore({

    reducer:CartReducer,
})