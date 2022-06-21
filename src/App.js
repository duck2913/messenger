import { Routes, Route } from "react-router-dom";
import Chats from "./components/Chats/Chats";
import { Login } from "./components/Login/Login";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/chats" element={<Chats />}></Route>
				<Route path="*" element={<div>There is nothing here</div>}></Route>
			</Routes>
		</div>
	);
}

export default App;
