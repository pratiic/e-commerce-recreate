import React from "react";
import "./sign-up.scss";
import FormInput from "../form-input/form-input.js";
import CustomButton from "../custom-button/custom-button.js";
import {
	auth,
	createUserProfileDocument,
} from "../../firebase/firebase.utils.js";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			username: "",
			email: "",
			password: "",
			repeatedPassword: "",
		};
	}

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleFormSubmit = async (event) => {
		event.preventDefault();

		let { username, email, password, repeatedPassword } = this.state;

		if (password !== repeatedPassword) {
			console.log("passwords do not match");
			return;
		}

		let { user } = await auth.createUserWithEmailAndPassword(
			email,
			password
		);

		try {
			await createUserProfileDocument(user, { username });
			this.setState({
				username: "",
				email: "",
				password: "",
				repeatedPassword: "",
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div className="sign-up">
				<h1 className="title">i do not have an account</h1>
				<h3 className="subtitle">sign up with email and password</h3>
				<form
					className="form sign-up-form"
					onSubmit={this.handleFormSubmit}
				>
					<FormInput
						type="text"
						name="username"
						label="username"
						value={this.state.username}
						handleInputChange={this.handleInputChange}
					/>

					<FormInput
						type="email"
						name="email"
						label="email"
						value={this.state.email}
						handleInputChange={this.handleInputChange}
					/>

					<FormInput
						type="password"
						name="password"
						label="password"
						value={this.state.password}
						handleInputChange={this.handleInputChange}
					/>

					<FormInput
						type="password"
						name="repeatedPassword"
						label="repeat password"
						value={this.state.repeatedPassword}
						handleInputChange={this.handleInputChange}
					/>

					<CustomButton type="submit" value="sign up now" />
				</form>
			</div>
		);
	}
}

export default SignUp;
