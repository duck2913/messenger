import classes from "./Login.module.scss";
import { auth } from "../../firebase";
import firebase from "firebase/compat/app";

export const Login = () => {
	return (
		<div className={classes.login_container}>
			<div className={classes["login-modal"]}>
				<h1>Login right now!</h1>
				<button
					className={classes.login}
					onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
						alt="google icon"
					/>
					Join now with Google
				</button>
				<button
					className={classes.login}
					onClick={() =>
						auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
					}
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
						alt="facebook icon"
					/>
					Join now with Facebook
				</button>
			</div>
		</div>
	);
};
