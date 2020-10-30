import React from "react";
import { connect } from "react-redux";

import "./checkout-item.scss";

import { clearItemFromCart } from "../../redux/cart/cart.actions.js";
import { addItemToCart } from "../../redux/cart/cart.actions.js";
import { removeItemFromCart } from "../../redux/cart/cart.actions.js";

let CheckoutItem = ({
	item,
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
}) => {
	let { name, price, count, imageURL } = item;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageURL} alt="checkout item" />
			</div>
			<div className="checkout-info checkout-item-name">{name}</div>
			<div className="checkout-info checkout-item-price">$ {price}</div>
			<div className="checkout-info checkout-item-count">
				<span
					className="arrow left-arrow"
					onClick={() => {
						removeItemFromCart(item);
					}}
				>
					{" "}
					&#10094;
				</span>
				<span className="checkout-item-count-main">{count}</span>
				<span
					className="arrow right-arrow"
					onClick={() => {
						addItemToCart(item);
					}}
				>
					{" "}
					&#10095;
				</span>
			</div>
			<div
				className="checkout-info checkout-item-remove"
				onClick={() => {
					clearItemFromCart(item);
				}}
			>
				&#x2716;
			</div>
		</div>
	);
};

let mapDispatchToProps = (dispatch) => {
	return {
		clearItemFromCart: (item) => {
			dispatch(clearItemFromCart(item));
		},
		addItemToCart: (item) => {
			dispatch(addItemToCart(item));
		},
		removeItemFromCart: (item) => {
			dispatch(removeItemFromCart(item));
		},
	};
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
