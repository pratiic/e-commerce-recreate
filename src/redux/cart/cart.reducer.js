import { cartActionTypes } from "./cart.types.js";
import { addItemToCart } from "./cart.utils.js";
import { removeItemFromCart } from "./cart.utils.js";

let INITIAL_STATE = {
	hideCartDropdown: true,
	cartItems: [],
};

let cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hideCartDropdown: !state.hideCartDropdown,
			};
		case cartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case cartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((cartItem) => {
					return cartItem.id !== action.payload.id;
				}),
			};
		case cartActionTypes.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
