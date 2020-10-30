import { createSelector } from "reselect";

let selectCart = (state) => state.cart;

export let selectCartItems = createSelector([selectCart], (cart) => {
	return cart.cartItems;
});

export let selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) => {
		return cartItems.reduce((totalItemsCount, currentCartItem) => {
			return totalItemsCount + currentCartItem.count;
		}, 0);
	}
);

export let selectHideCartDropdown = createSelector([selectCart], (cart) => {
	return cart.hideCartDropdown;
});

export let selectCartTotal = createSelector([selectCartItems], (cartItems) => {
	return cartItems.reduce((cartTotal, currentCartItem) => {
		return cartTotal + currentCartItem.price * currentCartItem.count;
	}, 0);
});
