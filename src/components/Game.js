import React, { useEffect, useState } from "react";
import "../styles/Game.scss";
import { GameCard } from "./GameCard";

import scenarios from "../scenarios.json";

function Game() {
	const [image, setImage] = useState("");
	const [tips, setTips] = useState();
	const [answer, setAnswer] = useState();
	const [isCorrect, setCorrect] = useState();

	const [randomScenario, setRandomScenario] = useState({});

	useEffect(() => {
		console.log("mount");

		setRandomScenario(
			scenarios.all[Math.floor(Math.random() * scenarios.all.length)]
		);
	}, []);

	useEffect(() => {
		setImage(randomScenario.imageUrl);
		setAnswer(randomScenario.answer);
		setTips(randomScenario.tips);

		console.log(randomScenario);
	}, [randomScenario]);

	function submitAnswer(userAnswer) {
		answer === userAnswer ? setCorrect(true) : setCorrect(false);
		console.log(isCorrect);
	}

	return (
		<div className="App">
			<div className="accent-bar bg-both" />
			<div className="card-section">
				<div className="card game-card"></div>
				<GameCard />
			</div>
			<div className="button-section">
				<div
					onClick={() => submitAnswer(false)}
					className="button button-red game-button button-large">
					Phish
				</div>
				<div
					onClick={() => submitAnswer(true)}
					className="button button-green game-button button-large">
					Legit
				</div>
			</div>
		</div>
	);
}

export default Game;
