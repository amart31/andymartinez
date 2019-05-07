import React from "react";
import avatar from "../../img/avatar.jpeg";
import { Progress } from "reactstrap";

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
						<i className="fab fa-react fa-5x" />

						<h4>React</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3">
						<i className="fab fa-js-square fa-5x" />

						<h4>Vanilla Js</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3">
						<i className="fab fa-html5 fa-5x" />

						<h4>HTML</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3">
						<i className="fab fa-wordpress-simple fa-5x" />

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
								height: 220 + "px",
								width: 220 + "px"
							}}
						/>
						<p className="mytext pt-3">Web Developer from Miami, FL.</p>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
						<Progress animated color="info" value={80}>
							React
						</Progress>
						<br />
						<Progress animated color="info" value={85}>
							JavaScript
						</Progress>
						<br />
						<Progress animated color="info" value={80}>
							HTML
						</Progress>
						<br />
						<Progress animated color="info" value={80}>
							CSS
						</Progress>
						<br />
						<Progress animated color="info" value={75}>
							WordPress
						</Progress>
						<br />
						<Progress animated color="info" value={70}>
							PHP
						</Progress>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

Progress.propTypes = {
	multi: PropTypes.bool,
	bar: PropTypes.bool, // used in combination with multi
	tag: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	max: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
	animated: PropTypes.bool,
	striped: PropTypes.bool,
	color: PropTypes.string,
	className: PropTypes.string,
	barClassName: PropTypes.string // used to add class to the inner progress-bar element
};
