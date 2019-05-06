import React from "react";
import avatar from "../../img/avatar.jpeg";

import PropTypes from "prop-types";

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="about-container" className="content-containers container text-center mt-5">
				<h1>About</h1>
				<div className="row mt-5">
					<div className="col-6 col-sm-6 col-md-3">
						<img
							className="img-fluid"
							src={avatar}
							style={{
								borderRadius: 50 + "%",
								height: 100 + "px",
								width: 100 + "px"
							}}
						/>
						<h4>React</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3">
						<img
							className="img-fluid"
							src={avatar}
							style={{
								borderRadius: 50 + "%",
								height: 100 + "px",
								width: 100 + "px"
							}}
						/>
						<h4>Vanilla Js</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3">
						<img
							className="img-fluid"
							src={avatar}
							style={{
								borderRadius: 50 + "%",
								height: 100 + "px",
								width: 100 + "px"
							}}
						/>
						<h4>PHP</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3">
						<img
							className="img-fluid"
							src={avatar}
							style={{
								borderRadius: 50 + "%",
								height: 100 + "px",
								width: 100 + "px"
							}}
						/>
						<h4>Wordpress</h4>
					</div>
				</div>

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className="img-fluid"
							src={avatar}
							style={{
								borderRadius: 50 + "%",
								height: 100 + "px",
								width: 100 + "px"
							}}
						/>
						<p className="mytext pt-3">Web Developer from Miami, FL.</p>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								PHP
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								VanillaJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
