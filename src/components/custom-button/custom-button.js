import React from "react";

import "./custom-button.scss";

let CustomButton = ({
	type,
	value,
	signInWithGoogle,
	customStyle,
	func,
	addToCart,
	handleCheckoutClick,
}) => {
	let handleButtonClick = () => {
		if (func === "sign-in-with-google") {
			if (signInWithGoogle) {
				signInWithGoogle();
			}
		}

		if (func === "add-item-to-cart") {
			addToCart();
		}

		if (func === "checkout") {
			handleCheckoutClick();
		}
	};

	return (
		<button
			className={`custom-button ${customStyle}`}
			type={type}
			onClick={handleButtonClick}
		>
			{value}
		</button>
	);
};

export default CustomButton;
