import React, { useEffect, useState } from "react";
import "../styles/Game.scss";
import { GameCard } from "./GameCard";
import { withRouter } from "react-router-dom";
import scenarios from "../scenarios";

const Game = props => {
	const [image, setImage] = useState();
	const [tips, setTips] = useState();
	const [answer, setAnswer] = useState();
	const [isCorrect, setCorrect] = useState();
	const [isAnswered, setAnswered] = useState(false);
	const [asked, setAsked] = useState([]);
	const [answeredCorrect, setAnsweredCorrect] = useState(0);

	const ROUNDS = 10;

	useEffect(() => {
		console.log("mount");
		const scenarioIndex = Math.floor(Math.random() * scenarios.length);
		const scenario = scenarios[scenarioIndex];

		setAsked(a => a.concat(scenarioIndex));
		setImage(scenario.imageURL);
		setTips(scenario.tips);
		setAnswer(scenario.answer);
	}, []);

	function submitAnswer(userAnswer) {
		console.log("actual answer", answer);
		console.log("user answer", userAnswer);
		console.log("asked", asked);
		if (answer === userAnswer) {
			setCorrect(true);
			setAnsweredCorrect(answeredCorrect => answeredCorrect + 1);
		} else {
			setCorrect(false);
		}
		setAnswered(true);
	}

	function nextQuestion() {
		if (asked.length <= ROUNDS) {
			let scenarioIndex = Math.floor(Math.random() * scenarios.length);
			while (asked.includes(scenarioIndex)) {
				scenarioIndex = Math.floor(Math.random() * scenarios.length);
			}
			let scenario = scenarios[scenarioIndex];
			console.log("inside next before, asked", asked);
			setAsked(a => a.concat(scenarioIndex));
			console.log("inside next, asked", asked);
			setImage(scenario.imageURL);
			setTips(scenario.tips);
			setAnswer(scenario.answer);
			setAnswered(false);
		} else {
			gameOverRedirect();
		}
	}

	function gameOverRedirect() {
		props.history.push({
			pathname: "/game-over",
			state: {
				correctAmount: answeredCorrect,
			},
		});
	}

	return (
		<div className="App">
			<div
				className={`accent-bar ${
					!isAnswered ? "bg-both" : isCorrect ? "bg-green" : "bg-red"
				}`}
			/>
			<div className="card-section">
				<div className="game-card">
					<GameCard image={image} />
				</div>
			</div>
			{!isAnswered ? (
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
			) : (
				<div className="answer-wrapper">
					<div className="answer-section row">
						<div className="answer-description">
							{isCorrect ? (
								<p className="text-green">
									Correct, it's {answer ? "legit" : "a phish"}!{" "}
								</p>
							) : (
								<p className="text-red">
									Incorrect, it's {answer ? "legit" : "a phish"}!{" "}
								</p>
							)}
						</div>
						<div
							onClick={
								asked.length === ROUNDS ? gameOverRedirect : nextQuestion
							}
							className="button button-light button-large">
							{asked.length === ROUNDS ? "Done" : "Next"}
						</div>
					</div>
					<div className="tips-container">
						<h1>Tips</h1>
						<div className="tip-text">
							{tips.map(tip => {
								return <p dangerouslySetInnerHTML={{ __html: tip }} />;
							})}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default withRouter(Game);
