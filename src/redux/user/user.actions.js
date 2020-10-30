import { userActionTypes } from "./user.types.js";

export let setCurrentUser = (user) => {
	return {
		type: userActionTypes.SET_CURRENT_USER,
		payload: user,
	};
};
