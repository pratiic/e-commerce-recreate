import React from "react";
import { connect } from "react-redux";

import "./cart-icon.scss";
import cartIcon from "../../assets/icons/cart.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

let CartIcon = ({ toggleCartDropdown, cartItemsCount }) => {
	return (
		<div className="cart-icon header-link" onClick={toggleCartDropdown}>
			<img src={cartIcon} alt="cart icon" />
			<span className="total-count">{cartItemsCount}</span>
		</div>
	);
};

let mapStateToProps = (state) => {
	return {
		cartItemsCount: selectCartItemsCount(state),
	};
};

export default connect(mapStateToProps)(CartIcon);
