import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.scss";

import CustomButton from "../custom-button/custom-button.js";
import CartItem from "../cart-item/cart-item.js";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { toggleCartDropdown } from "../../redux/cart/cart.actions.js";

let CartDropdown = ({ cartItems, history, dispatch }) => {
	let handleCheckoutClick = () => {
		history.push("checkout");
		dispatch(toggleCartDropdown());
	};

	return (
		<div className="cart-dropdown">
			{cartItems.length > 0 ? (
				<React.Fragment>
					<div className="cart-items">
						{cartItems.map((cartItem) => {
							return (
								<CartItem item={cartItem} key={cartItem.id} />
							);
						})}
					</div>
					<CustomButton
						type="submit"
						value="checkout"
						customStyle="checkout"
						func="checkout"
						handleCheckoutClick={handleCheckoutClick}
					/>
				</React.Fragment>
			) : (
				<span className="empty-cart-message">the cart is empty</span>
			)}
		</div>
	);
};

let mapStateToProps = (store) => {
	return {
		cartItems: selectCartItems(store),
	};
};

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
