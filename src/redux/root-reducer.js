import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer.js";
import cartReducer from "./cart/cart.reducer.js";
import directoryReducer from "./directory/directory.reducer.js";
import shopReducer from "./shop/shop.reducer.js";

let persistConfig = {
	key: "root",
	storage: storage,
	whitelist: ["cart"],
};

let rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
