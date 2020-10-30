import React from "react";
import { connect } from "react-redux";

import "./checkout.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.js";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { selectCartTotal } from "../../redux/cart/cart.selectors.js";

let Checkout = ({ cartItems, cartTotal }) => {
	return (
		<div className="checkout">
			<h1 className="checkout-title">checkout</h1>
			{cartItems.map((cartItem) => {
				return <CheckoutItem item={cartItem} key={cartItem.id} />;
			})}
			<div className="total-amount">total: ${cartTotal}</div>
		</div>
	);
};

let mapStateToProps = (state) => {
	return {
		cartItems: selectCartItems(state),
		cartTotal: selectCartTotal(state),
	};
};

export default connect(mapStateToProps)(Checkout);
