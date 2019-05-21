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
			<React.Fragment>
				<div id="about-container" className="content-containers container text-center mt-1">
					<hr />
					<div className="row" style={{ marginTop: 3 + "rem" }}>
						<div className="col-12 col-lg-6 hidden">
							<img
								className="img-fluid avatar"
								src={avatar}
								style={{
									borderRadius: 50 + "%",
									height: 200 + "px",
									width: 200 + "px"
								}}
							/>
							<p className="about pt-3">
								I am a Full Stack Jr Developer with experience creating responsive, dynamic, and
								user-friendly applications with ReactJs, Vanilla Js, and much more. Take a look at my
								work and get in touch!
							</p>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
							<Progress animated color="danger" value={85} className="skills-progress">
								React
							</Progress>
							<br />
							<Progress animated color="danger" value={85} className="skills-progress">
								JavaScript
							</Progress>
							<br />
							<Progress animated color="danger" value={87} className="skills-progress">
								HTML
							</Progress>
							<br />
							<Progress animated color="danger" value={83} className="skills-progress">
								CSS
							</Progress>
							<br />
							<Progress animated color="danger" value={76} className="skills-progress">
								WordPress
							</Progress>
							<br />
							<Progress animated color="danger" value={70} className="skills-progress">
								PHP
							</Progress>
							<br />
						</div>
					</div>
				</div>
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
