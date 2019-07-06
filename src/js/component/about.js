import React from "react";
import avatar from "../../img/avatar.jpeg";
import { Progress } from "reactstrap";

import ScrollAnimation from "react-animate-on-scroll";

import PropTypes from "prop-types";

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<section className="section-about container text-center">
					<div className="row" style={{ marginTop: 5 + "rem", marginBottom: 5 + "rem" }}>
						<div className="col-12 col-lg-6">
							<ScrollAnimation animateIn="fadeInLeft">
								<img className="img-fluid avatar--about" src={avatar} />
								<p className="about pt-3">
									I am a Full Stack Jr Developer with experience creating responsive, dynamic, and
									user-friendly applications with ReactJs, Vanilla Js, and much more. Take a look at
									my work and get in touch!
								</p>
							</ScrollAnimation>
						</div>

						<div className="col-12 col-lg-6 pt-5">
							<ScrollAnimation animateIn="fadeInRight">
								<Progress animated color="success" value={85} className="skills-progress">
									React
								</Progress>
								<br />
								<Progress animated color="danger" value={85} className="skills-progress">
									JavaScript
								</Progress>
								<br />
								<Progress animated color="primary" value={87} className="skills-progress">
									HTML
								</Progress>
								<br />
								<Progress animated color="warning" value={83} className="skills-progress">
									CSS
								</Progress>
								<br />
								<Progress animated color="info" value={76} className="skills-progress">
									WordPress
								</Progress>
								<br />
								<Progress animated color="danger" value={70} className="skills-progress">
									PHP
								</Progress>
							</ScrollAnimation>
							<br />
						</div>
					</div>
				</section>
			</React.Fragment>
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
