import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
