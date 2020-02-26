import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";

export const Title = ({ title }) => (
	<ScrollAnimation animateIn="zoomIn" animationInDuration={1000}>
		<div className="section-title">
			<h4>{title}</h4>
		</div>
	</ScrollAnimation>
);

Title.propTypes = {
	title: PropTypes.string
};
