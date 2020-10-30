import { userActionTypes } from "./user.types.js";

let INITIAL_STATE = {
	currentUser: null,
};

let userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
