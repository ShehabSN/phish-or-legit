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
				</div>
				<div className="page-column flex-center">
					<div className="card how-to-play">
						<h2 className="page-heading2">How to Play</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
