import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Todo from "./components/Todo";
import About from "./components/About";

const App = () => (
	<Router>
		<Navigation />
		<Route path="/todo" component={Todo} />
		<Route path="/about" component={About} />
	</Router>
);

export default App;
