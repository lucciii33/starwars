import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Characters } from "./views/character";
import { Information } from "./views/information";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { InfoPlanets } from "./views/InfoPlanets";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/character" component={Characters}></Route>
						<Route exact path="/demo" component={Demo}></Route>
						<Route exact path="/single/:theid" component={Single}></Route>
						<Route exact path="/information/:theid" component={Information}></Route>
						<Route exact path="/infoPlanets/:theid" component={InfoPlanets}></Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		
	);
};

export default injectContext(Layout);
