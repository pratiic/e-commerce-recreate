import React from "react";
import "./form-input.scss";

let FormInput = ({ type, name, value, label, handleInputChange }) => {
	return (
		<div className="input-group">
			<input
				type={type}
				name={name}
				onChange={handleInputChange}
				value={value}
			/>
			<label className={value.length > 0 ? "lift" : null}>{label}</label>
		</div>
	);
};

export default FormInput;
