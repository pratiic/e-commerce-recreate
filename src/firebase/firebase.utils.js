import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let config = {
	apiKey: "AIzaSyCu7WJrFYu3dgQZ-Of2k-ze1Wl1G5tSplE",
	authDomain: "e-commerce-recreate.firebaseapp.com",
	databaseURL: "https://e-commerce-recreate.firebaseio.com",
	projectId: "e-commerce-recreate",
	storageBucket: "e-commerce-recreate.appspot.com",
	messagingSenderId: "382423143273",
	appId: "1:382423143273:web:d27ab6ec2021cd4450e3f8",
	measurementId: "G-F27RP01E85",
};

firebase.initializeApp(config);

export let auth = firebase.auth();
export let firestore = firebase.firestore();

let provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export let signInWithGoogle = () => auth.signInWithPopup(provider);

export let createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	let userRef = firestore.doc(`users/${userAuth.uid}`);

	let snapShot = await userRef.get();

	if (!snapShot.exists) {
		let { displayName, email } = userAuth;
		let createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log(error.message);
		}
	}

	return userRef;
};

export default firebase;
