import React from "react";
import { connect } from "react-redux";

import "./collection-item.scss";

import CustomButton from "../custom-button/custom-button.js";
import { addItemToCart } from "../../redux/cart/cart.actions.js";

let CollectionItem = ({ imageURL, name, price, id, addItemToCart }) => {
	let addToCart = () => {
		addItemToCart({ name, price, imageURL, id });
	};

	return (
		<div className="collection-item">
			<img src={imageURL} alt={name} className="collection-item-image" />
			<div className="collection-item-info">
				<span className="collection-item-name">{name}</span>
				<span className="collection-item-price">$ {price}</span>
			</div>
			<CustomButton
				value="add to cart"
				customStyle="add-to-cart"
				addToCart={addToCart}
				func="add-item-to-cart"
			/>
		</div>
	);
};

let mapDispatchToProps = (dispatch) => {
	return {
		addItemToCart: (item) => {
			dispatch(addItemToCart(item));
		},
	};
};

export default connect(null, mapDispatchToProps)(CollectionItem);
