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
				<h1 className="text-secondary">About</h1>
				<div className="row mt-5">
					<div className="col-6 col-sm-6 col-md-3">
						<i className="fab fa-react fa-5x text-info" />

						<h4>React</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3">
						<i className="fab fa-js-square fa-5x text-info" />

						<h4>Vanilla Js</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3">
						<i className="fab fa-html5 fa-5x text-info" />

						<h4>HTML</h4>
					</div>
					<div className="col-6 col-sm-6 col-md-3">
						<i className="fab fa-wordpress-simple fa-5x text-info" />

						<h4>Wordpress</h4>
					</div>
				</div>
				<hr />
				<div className="row" style={{ marginTop: 3 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className="img-fluid avatar"
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
						<Progress animated color="info" value={85} className="skills-progress">
							React
						</Progress>
						<br />
						<Progress animated color="info" value={85} className="skills-progress">
							JavaScript
						</Progress>
						<br />
						<Progress animated color="info" value={87} className="skills-progress">
							HTML
						</Progress>
						<br />
						<Progress animated color="info" value={83} className="skills-progress">
							CSS
						</Progress>
						<br />
						<Progress animated color="info" value={76} className="skills-progress">
							WordPress
						</Progress>
						<br />
						<Progress animated color="info" value={70} className="skills-progress">
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
	tag: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	max: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
	animated: PropTypes.bool,
	color: PropTypes.string,
	className: PropTypes.string
};
