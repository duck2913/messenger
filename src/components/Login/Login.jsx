import classes from "./Login.module.scss";

export const Login = () => {
	return (
		<div className={classes.login_container}>
			<div className={classes["login-modal"]}>
				<h1>Login right now!</h1>
				<button className={`${classes["login--google"]} ${classes.login}`}>
					<img
						src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
						alt="google icon"
					/>
					Join now with Facebook
				</button>
				<button className={`${classes["login--facebook"]} ${classes.login}`}>
					<img
						src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
						alt="facebook icon"
					/>
					Join now with Google
				</button>
			</div>
		</div>
	);
};
