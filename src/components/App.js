import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Homepage from "./Homepage";
import Game from "./Game";
import GameOver from "./Gameover";

function App() {
	return (
		<Router>
			<Route component={Homepage} path="/" exact />
			<Route component={Game} path="/play" exact />
			<Route component={GameOver} path="/game-over" exact />
		</Router>
	);
}

export default App;
