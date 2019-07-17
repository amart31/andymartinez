import React from "react";
import avatar from "../../img/avatar.jpeg";
import { Progress } from "reactstrap";

import ScrollAnimation from "react-animate-on-scroll";

import PropTypes from "prop-types";

function About(props) {
	return (
		<section className="section-about">
			<div className="row">
				<div className="col-12 col-lg-6">
					<ScrollAnimation animateIn="fadeInLeft">
						<img className="img-fluid avatar--about" src={avatar} />
						<p className="about pt-3">
							I am a Full Stack Developer with experience creating responsive, dynamic, and user-friendly
							applications with ReactJs, Vanilla Js, and much more. Take a look at my work and get in
							touch!
						</p>
					</ScrollAnimation>
				</div>

				<div className="col-12 col-lg-6 pt-5">
					<ScrollAnimation animateIn="fadeInRight">
						<Progress animated color="danger" value={75} className="skills-progress">
							ReactJs
						</Progress>
						<br />
						<Progress animated color="danger" value={80} className="skills-progress">
							Vanilla Js
						</Progress>
						<br />
						<Progress animated color="danger" value={85} className="skills-progress">
							HTML
						</Progress>
						<br />
						<Progress animated color="danger" value={80} className="skills-progress">
							CSS
						</Progress>
						<br />
						<Progress animated color="danger" value={70} className="skills-progress">
							WordPress
						</Progress>
						<br />
						<Progress animated color="danger" value={60} className="skills-progress">
							PHP
						</Progress>
						<br />
						<Progress animated color="danger" value={70} className="skills-progress">
							NodeJs
						</Progress>
						<br />
						<Progress animated color="danger" value={60} className="skills-progress">
							MySQL
						</Progress>
						<br />
						<Progress animated color="danger" value={80} className="skills-progress">
							Bootstrap
						</Progress>
						<br />
					</ScrollAnimation>
					<br />
				</div>
			</div>
		</section>
	);
}
export default About;

Progress.propTypes = {
	tag: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	animated: PropTypes.bool,
	color: PropTypes.string,
	className: PropTypes.string
};
