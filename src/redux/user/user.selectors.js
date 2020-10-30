import { createSelector } from "reselect";

let selectUser = (state) => state.user;

export let selectCurrentUser = createSelector([selectUser], (user) => {
	return user.currentUser;
});
