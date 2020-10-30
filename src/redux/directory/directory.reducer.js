let INITIAL_STATE = {
	menuItems: [
		{
			title: "hats",
			imageURL: "https://i.ibb.co/cvpntL1/hats.png",
			id: 1,
			link: "shop/hats",
		},
		{
			title: "jackets",
			imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
			id: 2,
			link: "shop/jackets",
		},
		{
			title: "sneakers",
			imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
			id: 3,
			link: "shop/sneakers",
		},
		{
			title: "womens",
			imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
			size: "large",
			id: 4,
			link: "shop/womens",
		},
		{
			title: "mens",
			imageURL: "https://i.ibb.co/R70vBrQ/men.png",
			size: "large",
			id: 5,
			link: "shop/mens",
		},
	],
};

let directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
