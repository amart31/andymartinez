import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar nav-style">
				<Link to="/">
					<span className="navbar-brand h2">Andy Martinez</span>
				</Link>
				<div className="ml-auto p-2">
					<Link to="/resume">
						<button type="button" className="btn btn--nav btn-outline-secondary p-2">
							Resume
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}
