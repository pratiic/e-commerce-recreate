import React from "react";
import { Route } from "react-router-dom";

import "./shop.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview.js";
import Collection from "../../pages/collection/collection.js";

let Shop = ({ match }) => {
	console.log(match);
	return (
		<div className="shop">
			<Route
				path={`${match.path}`}
				exact
				component={CollectionsOverview}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={Collection}
			/>
		</div>
	);
};

export default Shop;
