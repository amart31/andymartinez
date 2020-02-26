import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const Header = () => {
	return (
		<div className="text-center extra">
			<header className="header">
				<div className="header--textbox">
					<h1 className="header--primary">
						<ScrollAnimation animateIn="fadeInLeft">
							<span className="header--primary--main">{"<Welcome />"}</span>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInRight">
							<span className="header--primary--sub">created by Andy Martinez </span>
						</ScrollAnimation>
						<span className="header--primary--sub2">Pega Certified Senior System Architect</span>
					</h1>

					<a href="#projectsList" className="btn btn--white">
						see my work
					</a>
				</div>
			</header>
		</div>
	);
};
