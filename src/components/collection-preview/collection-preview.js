import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item.js";

let CollectionPreview = ({ title, items }) => {
	let renderCollectionItems = () => {
		return items
			.filter((item, index) => index < 4)
			.map((item) => {
				return (
					<CollectionItem
						key={item.id}
						imageURL={item.imageUrl}
						name={item.name}
						price={item.price}
						id={item.id}
					/>
				);
			});
	};

	return (
		<div className="collection-preview">
			<h1 className="collection-title">{title}</h1>
			<div className="preview">{renderCollectionItems()}</div>
		</div>
	);
};

export default CollectionPreview;
