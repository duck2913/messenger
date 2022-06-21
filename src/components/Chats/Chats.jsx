import React from "react";
import "./Chats.module.scss";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Chats = () => {
	const navigate = useNavigate();

	return (
		<div className="chat-container">
			<div
				className="chat__nav-bar"
				onClick={() => {
					auth.signOut();
					navigate("/");
				}}
			>
				logout
			</div>
		</div>
	);
};

export default Chats;
