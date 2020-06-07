import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import "./App.css";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/resume">
						<Resume />
					</Route>
					<Route path="/aboutme">
						<AboutMe />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/contacts">
						<Contacts />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
