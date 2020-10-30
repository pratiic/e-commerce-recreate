import { cartActionTypes } from "./cart.types.js";

export let toggleCartDropdown = () => {
	return {
		type: cartActionTypes.TOGGLE_CART_DROPDOWN,
	};
};

export let addItemToCart = (item) => {
	return {
		type: cartActionTypes.ADD_ITEM_TO_CART,
		payload: item,
	};
};

export let clearItemFromCart = (item) => {
	return {
		type: cartActionTypes.CLEAR_ITEM_FROM_CART,
		payload: item,
	};
};

export let removeItemFromCart = (item) => {
	return {
		type: cartActionTypes.REMOVE_ITEM_FROM_CART,
		payload: item,
	};
};
