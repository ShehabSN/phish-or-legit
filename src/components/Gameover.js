import React from "react";
import { withRouter, Redirect } from "react-router";

const Gameover = props => {
	return (
		<div className="App">
			<div className="game-over fade-in">
				{!props.location.state ? (
					<Redirect to="/" />
				) : (
					<>
						<h1>Game Over</h1>
						<h2
							className={
								props.location.state.correctAmount < 5
									? "text-red"
									: "text-green"
							}>
							You got {props.location.state.correctAmount}/10 correct!
						</h2>
						<div
							style={{ paddingLeft: 30, paddingRight: 30, marginTop: 40 }}
							onClick={() => {
								props.history.push("/play");
							}}
							className="button button-light">
							Play Again
						</div>
					</>
				)}
			</div>
			<div
				style={{
					paddingLeft: 20,
					paddingRight: 20,
					marginTop: 20,
					marginLeft: 40,
				}}
				onClick={() => {
					props.history.push("/");
				}}
				className="button button-dark">
				Return Home
			</div>
		</div>
	);
};

export default withRouter(Gameover);
