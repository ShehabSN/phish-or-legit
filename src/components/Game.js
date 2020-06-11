import React, { useEffect, useState } from "react";
import "../styles/Game.scss";
import { GameCard } from "./GameCard";

import scenarios from "../scenarios.json";

function Game() {
	const [image, setImage] = useState();
	const [tips, setTips] = useState();
	const [answer, setAnswer] = useState();
	const [isCorrect, setCorrect] = useState();

	//const [randomScenario, setRandomScenario] = useState({});

	//let setScenario = useCallback(() => {
	//	//setRandomScenario(
	//	const scenario =
	//		scenarios.all[Math.floor(Math.random() * scenarios.all.length)];
	//	//);
	//	setImage(scenario.imageURL);
	//	setTips(scenario.tips);
	//	setAnswer(scenario.answer);

	//	console.log("image", image);
	//	console.log("tips", tips);
	//	console.log("answer", answer);
	//}, [answer, image, tips]);

	useEffect(() => {
		console.log("mount");
		const scenario =
			scenarios.all[Math.floor(Math.random() * scenarios.all.length)];
		setImage(scenario.imageURL);
		setTips(scenario.tips);
		setAnswer(scenario.answer);
	}, []);

	function submitAnswer(userAnswer) {
		console.log("actual answer", answer);
		console.log("user answer", userAnswer);
		answer === userAnswer ? setCorrect(true) : setCorrect(false);
	}

	return (
		<div className="App">
			{isCorrect === true ? (
				<p>Correct</p>
			) : isCorrect === false ? (
				<p>Incorrect</p>
			) : null}
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
