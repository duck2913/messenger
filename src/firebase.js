import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
	.initializeApp({
		apiKey: "AIzaSyCQ7xiYV9QQHUDeXxhgPrzj3JGnI7OlK4Y",
		authDomain: "react-fdf6f.firebaseapp.com",
		databaseURL: "https://react-fdf6f-default-rtdb.asia-southeast1.firebasedatabase.app",
		projectId: "react-fdf6f",
		storageBucket: "react-fdf6f.appspot.com",
		messagingSenderId: "300067121958",
		appId: "1:300067121958:web:f6951e1f86d45a3955efe7",
	})
	.auth();
