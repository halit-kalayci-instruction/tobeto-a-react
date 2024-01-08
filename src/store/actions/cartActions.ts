export const addToCart = (product: any) => {
	return {type: "ADD_TO_CART", payload: product};
};

export const removeFromCart = (product: any) => {
	return {type: "REMOVE_FROM_CART", payload: product};
};

export const clearCart = () => {
	return {type: "CLEAR_CART"};
};
