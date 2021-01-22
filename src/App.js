import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/homepage/Homepage";
import Stories from "./Pages/Stories/Stories";
import Features from "./Pages/Features/Features";
import Pricing from "./Pages/Pricing/Pricing";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/stories" component={Stories} />
				<Route path="/features" component={Features} />
				<Route path="/pricing" component={Pricing} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
