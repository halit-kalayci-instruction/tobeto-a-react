import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="*" element={<p>Not Found</p>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
