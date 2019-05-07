import React from "react";
import HeroView from "../component/heroView";
import "../../styles/home.scss";

import About from "../component/about";
import Contact from "../component/contact";

export class Home extends React.Component {
	// componentDidmount(){
	// 	if (this.$ref && location.href.includes())
	// }
	render() {
		return (
			<React.Fragment>
				<HeroView />

				<About />

				<div className="row">
					<div className="col text-center">
						<h2>Projects</h2>
						<h5>Title description, Dec 7, 2017</h5>
						<div className="fakeimg">Fake Image</div>
						<p>Some text..</p>
						<p>
							Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col text-center">
						<h2>Contact</h2>
						<Contact />
					</div>
				</div>

				<div className="jumbotron text-center" style={{ marginBottom: "0" }}>
					<p>Footer</p>
				</div>
			</React.Fragment>
		);
	}
}
