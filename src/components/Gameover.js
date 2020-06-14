import React from "react";
import { withRouter } from "react-router";

const Gameover = props => {
	return (
		<div className="App">
			<div className="App-header">
				<h1>Game Over</h1>
				<h2>You got {props.location.state.correctAmount}/7 answers</h2>
			</div>
		</div>
	);
};

export default withRouter(Gameover);
