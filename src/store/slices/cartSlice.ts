import {createSlice} from "@reduxjs/toolkit";
import {ProductModel} from "../../models/responses/ProductModel";

interface CartItem {
	product: ProductModel;
	quantity: number;
}

const cartSlice = createSlice({
	name: "cart",
	initialState: {cartItems: [] as CartItem[]},
	reducers: {
		addToCart: (state, action) => {
			let existingItem = state.cartItems.find(
				(i: CartItem) => i.product.id == action.payload.product.id,
			);

			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.cartItems.push({product: action.payload.product, quantity: 1});
			}
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(i: any) => i.product.id !== action.payload.product.id,
			);
		},
		clearCart: state => {
			state.cartItems = [];
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
// cartSlice.actions alanından addToCart, removeFromCart,clearCart isimli alanları dışarıya aç.
