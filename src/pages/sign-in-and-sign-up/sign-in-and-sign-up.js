import React from "react";
import "./sign-in-and-sign-up.scss";
import SignIn from "../../components/sign-in/sign-in.js";
import SignUp from "../../components/sign-up/sign-up.js";

let SignInAndSignUp = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUp;
