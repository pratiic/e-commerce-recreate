import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";

let MenuItem = ({ title, imageURL, size, link, history, match }) => {
	let clickHandler = () => {
		history.push(`${match.url}${link}`);
	};

	return (
		<div className={`menu-item ${size}`}>
			<img
				className="menu-item-background-image"
				src={imageURL}
				alt="menuitem"
			/>
			<div className="content" onClick={clickHandler}>
				<h1 className="title">{title}</h1>
				<span className="subtitle">shop now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
