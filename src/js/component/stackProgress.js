import React from "react";
import { Progress } from "reactstrap";
import PropTypes from "prop-types";

const SkillsProgress = props => {
	return (
		<div>
			<Progress multi>
				<Progress bar animated color="success" value="30">
					JavaScript
				</Progress>
				<Progress bar animated color="success" value="30">
					ReactJs
				</Progress>
				<Progress bar animated color="success" value="30">
					WordPress
				</Progress>
				<Progress bar animated color="success" value="30">
					PHP
				</Progress>
				<Progress bar animated color="success" value="30">
					Webpack
				</Progress>
				<Progress bar animated color="success" value="30">
					Git
				</Progress>
			</Progress>
		</div>
	);
};

export default SkillsProgress;

Progress.propTypes = {
	multi: PropTypes.bool,
	bar: PropTypes.bool, // used in combination with multi
	tag: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	animated: PropTypes.bool,
	striped: PropTypes.bool,
	color: PropTypes.string,
	className: PropTypes.string,
	barClassName: PropTypes.string // used to add class to the inner progress-bar element
};

Progress.defaultProps = {
	tag: "progress",
	value: 0,
	max: 100
};
