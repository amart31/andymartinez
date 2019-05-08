import React from "react";
import HeroView from "../component/heroView";
import "../../styles/home.scss";

import About from "../component/about";
import Contact from "../component/contact";
import Projects from "../component/projects";

export class Home extends React.Component {
	// componentDidmount(){
	// 	if (this.$ref && location.href.includes())
	// }
	render() {
		return (
			<React.Fragment>
				<HeroView />
				<div className="row">
					<div className="col text-center">
						<About />
					</div>
				</div>
				<div className="row">
					<div className="col text-center">
						<h2>Projects</h2>
						<hr />
						<Projects />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col text-center">
						<h2>Contact</h2>
						<hr />
						<Contact />
					</div>
				</div>

				<div className="jumbotron text-center" style={{ marginBottom: "0" }}>
					<div className="d-inline-flex social-icon">
						<i className="fab fa-linkedin fa-3x text-info" />
					</div>
					&nbsp;&nbsp;
					<div className="d-inline-flex social-icon">
						<i className="fab fa-github-square fa-3x text-info" />
					</div>
					&nbsp;&nbsp;
					<div className="d-inline-flex social-icon">
						<i className="fab fa-twitter-square fa-3x text-info" />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
