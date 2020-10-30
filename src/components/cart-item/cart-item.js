import React from "react";

import "./cart-item.scss";

let CartItem = ({ item }) => {
	let { name, price, imageURL, count } = item;
	return (
		<div className="cart-item">
			<img src={imageURL} alt="cart item" className="cart-item-image" />
			<div className="cart-item-info">
				<span className="cart-item-name">{name}</span>
				<span className="cart-item-count-price">
					{count} × $ {price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
