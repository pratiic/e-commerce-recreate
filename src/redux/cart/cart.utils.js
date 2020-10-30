export let addItemToCart = (cartItems, newCartItem) => {
	let existingItem = cartItems.find((cartItem) => {
		return cartItem.id === newCartItem.id;
	});

	if (existingItem) {
		return cartItems.map((cartItem) => {
			if (cartItem.id === newCartItem.id) {
				return { ...cartItem, count: cartItem.count + 1 };
			} else {
				return { ...cartItem };
			}
		});
	} else {
		return [...cartItems, { ...newCartItem, count: 1 }];
	}
};

export let removeItemFromCart = (cartItems, cartItemToBeRemoved) => {
	if (cartItemToBeRemoved.count === 1) {
		return cartItems.filter((cartItem) => {
			return cartItem.id !== cartItemToBeRemoved.id;
		});
	} else {
		return cartItems.map((cartItem) => {
			if (cartItem.id === cartItemToBeRemoved.id) {
				return {
					...cartItem,
					count: cartItem.count - 1,
				};
			} else {
				return cartItem;
			}
		});
	}
};
