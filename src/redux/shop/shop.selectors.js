import { createSelector } from "reselect";

let selectShop = (state) => state.shop;

let selectShopCollections = createSelector([selectShop], (shop) => {
	return shop.collections;
});

export let selectShopCollectionsAsArray = createSelector(
	[selectShopCollections],
	(collections) => {
		return Object.keys(collections).map((key) => {
			return collections[key];
		});
	}
);

export let selectShopCollection = (collectionId) => {
	return createSelector([selectShopCollections], (collections) => {
		return collections[collectionId];
	});
};
