import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input.js";
import CustomButton from "../custom-button/custom-button.js";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleFormSubmit = async (event) => {
		event.preventDefault();

		let { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div className="sign-in">
				<h1 className="title">i already have an account</h1>
				<h3 className="subtitle">sign in with email and password</h3>
				<form
					className="form sign-in-form"
					onSubmit={this.handleFormSubmit}
				>
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

					<div className="buttons">
						<CustomButton type="submit" value="submit" />
						<CustomButton
							signInWithGoogle={signInWithGoogle}
							value="sign in with google"
							customStyle="google-sign-in"
							func="sign-in-with-google"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
