import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.scss";

import logo from "../../assets/logos/logo.svg";
import { auth } from "../../firebase/firebase.utils.js";
import CartIcon from "../cart-icon/cart-icon.js";
import CartDropdown from "../cart-dropdown/cart-dropdown.js";
import { toggleCartDropdown } from "../../redux/cart/cart.actions.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { selectHideCartDropdown } from "../../redux/cart/cart.selectors.js";

let Header = ({ currentUser, toggleCartDropdown, hideCartDropdown }) => {
	return (
		<div className="header">
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>

			<div className="header-links">
				<Link className="header-link" to="/">
					home
				</Link>
				<Link className="header-link" to="/shop">
					shop
				</Link>
				{currentUser ? (
					<p
						className="header-link header-link-signout"
						onClick={() => {
							auth.signOut();
						}}
					>
						sign out
					</p>
				) : (
					<Link className="header-link" to="/signin">
						sign in
					</Link>
				)}
				<CartIcon toggleCartDropdown={toggleCartDropdown} />
			</div>

			{hideCartDropdown ? null : <CartDropdown />}
		</div>
	);
};

let mapStateToProps = (state) => {
	return {
		currentUser: selectCurrentUser(state),
		hideCartDropdown: selectHideCartDropdown(state),
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		toggleCartDropdown: () => {
			dispatch(toggleCartDropdown());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
