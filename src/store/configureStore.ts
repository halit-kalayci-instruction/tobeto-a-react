import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./slices/cartSlice";

export const rootReducer = combineReducers({
	cart: cartReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
