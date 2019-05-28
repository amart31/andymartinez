import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<Link to="/">
					<span className="navbar-brand h2">Andy Martinez</span>
				</Link>
				<div className="ml-auto">
					<Link to="/resume">
						<button type="button" className="btn btn-outline-secondary">
							Resume
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}
