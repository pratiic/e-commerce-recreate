import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.js";
import Shop from "./pages/shop/shop.js";
import Header from "./components/header/header.js";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.js";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { setCurrentUser } from "./redux/user/user.actions.js";
import Checkout from "./pages/checkout/checkout.js";

class App extends React.Component {
	componentDidMount() {
		let { setCurrentUser } = this.props;

		this.unSubscribeFromGoogleAuth = auth.onAuthStateChanged(
			async (userAuth) => {
				if (userAuth) {
					let userRef = await createUserProfileDocument(userAuth);
					userRef.onSnapshot((snapShot) => {
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data(),
						});
					});
				} else {
					setCurrentUser(userAuth);
				}
			}
		);
	}

	componentWillUnmount() {
		this.unSubscribeFromGoogleAuth();
	}

	render() {
		return (
			<div className="app">
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInAndSignUp />
							)
						}
					/>
					<Route path="/checkout" exact component={Checkout} />
				</Switch>
			</div>
		);
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => {
			dispatch(setCurrentUser(user));
		},
	};
};

export default connect(null, mapDispatchToProps)(App);
