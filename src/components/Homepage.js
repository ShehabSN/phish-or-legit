import React from "react";
import "../styles/home.sass";
import { Link } from "react-router-dom";

function Homepage() {
	return (
		<div className="App">
			<div className="accent-bar bg-both" />
			<div className="page homepage-section">
				<div className="page-column">
					<h1 className="page-heading">Phish or Legit</h1>
					<p className="subheading">
						Test your skills by correctly classifying each <br />
						scenario as phish or legit.
					</p>
					<p className="button-description">Feeling Confident?</p>
					<Link to="/play" className="button button-light button-large">
						Play
					</Link>
					<p className="button-description">Or before playing...</p>
					<a href="#tips" className="button button-dark">
						View Tips
					</a>
				</div>
				<div className="page-column flex-center">
					<div className="card how-to-play">
						<h2 className="page-heading2">How to Play</h2>
					</div>
				</div>
			</div>
			<section id="tips" className="page">
				<h3 className="tips-title">Gameplay Tips</h3>
				<div>
					<p>Tip for the game, bla bla bla</p>
					<p>Tip for the game, bla bla bla</p>
					<p>Tip for the game, bla bla bla</p>
					<p>Tip for the game, bla bla bla</p>
					<p>Tip for the game, bla bla bla</p>
					<p>Tip for the game, bla bla bla</p>
				</div>
			</section>
		</div>
	);
}

export default Homepage;
