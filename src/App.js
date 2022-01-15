import React from "react";
//Global Styles
import GlobalStyle from "./component/GlobalStyle";
//Import pages
import AboutUs from "./pages/AboutUs";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<AboutUs />
		</div>
	);
}

export default App;
