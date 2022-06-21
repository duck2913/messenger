import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			console.log(user);
			setUser(user);
			setIsLoading(false);
			if (user) navigate("/chats");
		});
	}, [user, navigate]);

	const ctx = { user };
	return <AuthContext.Provider value={ctx}>{!isLoading && children}</AuthContext.Provider>;
}

export default AuthContextProvider;
