import React from "react";
import { connect } from "react-redux";

import "./directory-menu.scss";

import MenuItem from "../menu-item/menu-item.js";

class DirectoryMenu extends React.Component {
	render() {
		return (
			<div className="directory-menu">
				{this.props.menuItems.map((menuItem) => {
					return (
						<MenuItem
							title={menuItem.title}
							imageURL={menuItem.imageURL}
							key={menuItem.id}
							size={menuItem.size}
							link={menuItem.link}
						/>
					);
				})}
			</div>
		);
	}
}

let mapStateToProps = (store) => {
	return {
		menuItems: store.directory.menuItems,
	};
};

export default connect(mapStateToProps)(DirectoryMenu);
