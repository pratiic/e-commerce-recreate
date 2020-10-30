import SHOP_DATA from "../../pages/shop/shop-data.js";

let INITIAL_STATE = {
	collections: SHOP_DATA,
};

let shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;
