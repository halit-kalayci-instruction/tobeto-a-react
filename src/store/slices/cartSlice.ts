import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {cartItems: []},
	reducers: {
		addToCart: (state, action) => {},
		removeFromCart: (state, action) => {},
		clearCart: state => {
			return {cartItems: []};
		},
	},
});
