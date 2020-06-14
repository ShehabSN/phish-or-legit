import React, { useEffect, useState } from "react";
import "../styles/Game.scss";
import { GameCard } from "./GameCard";

import scenarios from "../scenarios.json";

function Game() {
	const [image, setImage] = useState();
	const [tips, setTips] = useState();
	const [answer, setAnswer] = useState();
	const [isCorrect, setCorrect] = useState();
	const [isAnswered, setAnswered] = useState(false);
	const [asked, setAsked] = useState([]);


	useEffect(() => {
		console.log("mount");
		const scenarioIndex = Math.floor(Math.random() * scenarios.all.length);
		const scenario = scenarios.all[scenarioIndex];

		setAsked(a =>a.concat(scenarioIndex));
		setImage(scenario.imageURL);
		setTips(scenario.tips);
		setAnswer(scenario.answer);
	}, []);

	function submitAnswer(userAnswer) {
		console.log("actual answer", answer);
		console.log("user answer", userAnswer);
		answer === userAnswer ? setCorrect(true) : setCorrect(false);
		setAnswered(true);
	}

	function nextQuestion() {
		let scenarioIndex = Math.floor(Math.random() * scenarios.all.length);
		while (asked.includes(scenarioIndex)) {
			scenarioIndex = Math.floor(Math.random() * scenarios.all.length);
		}
		let scenario = scenarios.all[scenarioIndex];
		console.log("inside next, asked",asked);
		setAsked(a => a.concat(scenarioIndex));
		setImage(scenario.imageURL);
		setTips(scenario.tips);
		setAnswer(scenario.answer);
		setAnswered(false);
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
			{ !isAnswered ? (
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
			</div>) : (
			<div className="answer-section">
				<div className="answer-description">
				{isCorrect ? (
				<p className="text-green">Correct, it's {answer ? "legit" : "a phish"}! </p>) :
				(<p className="text-red">Incorrect, it's {answer ? "legit" : "a phish"}! </p>)}	
				</div>
				<div
					onClick={nextQuestion}
					className="button button-light game-button button-large">
					Next
				</div>
			</div>
			)}
		</div>
	);
}

export default Game;
