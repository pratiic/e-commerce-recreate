import React from "react";
import { connect } from "react-redux";

import "./collection.scss";

import { selectShopCollection } from "../../redux/shop/shop.selectors.js";
import CollectionItem from "../../components/collection-item/collection-item.js";

let Collection = ({ collection }) => {
	return (
		<div className="collection">
			<h1 className="collection-title">{collection.title}</h1>
			<div className="collection-items">
				{collection.items.map((item) => {
					return (
						<CollectionItem
							key={item.id}
							name={item.name}
							price={item.price}
							id={item.id}
							imageURL={item.imageUrl}
						/>
					);
				})}
			</div>
		</div>
	);
};

let mapStateToProps = (state, ownProps) => {
	return {
		collection: selectShopCollection(ownProps.match.params.collectionId)(
			state
		),
	};
};

export default connect(mapStateToProps)(Collection);
