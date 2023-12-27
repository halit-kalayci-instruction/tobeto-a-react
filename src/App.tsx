import {ReactElement} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./pages/Homepage/Homepage";

function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
