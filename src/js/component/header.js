//create your first component
import React from "react";

const Header = () => {
	return (
		<React.Fragment>
			<div className="text-center">
				<header className="header">
					<div className="text-box">
						<h1 className="heading-primary">
							<span className="heading-primary-main">{"<Welcome />"}</span>
							<span className="heading-primary-sub">created by Andy Martinez</span>
						</h1>

						<a href="#Projects" className="btn btn-white">
							see my work
						</a>
					</div>
				</header>
			</div>
		</React.Fragment>
	);
};

export default Header;
