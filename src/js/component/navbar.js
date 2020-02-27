import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className="navbar nav-style">
			<Link to="https://martinezandy.com/">
				<span className="navbar-brand h2">Andy Martinez</span>
			</Link>
			<div className="ml-auto p-2">
				<Link to="/resume">
					<button type="button" className="btn btn--nav btn-outline-light p-2">
						Resume
					</button>
				</Link>
			</div>
		</nav>
	);
};
