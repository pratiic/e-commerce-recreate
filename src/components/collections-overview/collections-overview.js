import React from "react";
import { connect } from "react-redux";

import "./collections-overview.scss";

import CollectionPreview from "../collection-preview/collection-preview.js";
import { selectShopCollectionsAsArray } from "../../redux/shop/shop.selectors.js";

let CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map((collection) => {
				return (
					<CollectionPreview
						key={collection.id}
						title={collection.title}
						routeName={collection.routeName}
						items={collection.items}
					/>
				);
			})}
		</div>
	);
};

let mapStateToProps = (store) => {
	return {
		collections: selectShopCollectionsAsArray(store),
	};
};

export default connect(mapStateToProps)(CollectionsOverview);
