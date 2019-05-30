import React from "react";

const Header = () => {
	return (
		<React.Fragment>
			<div className="text-center">
				<header className="header">
					<div className="header--textbox">
						<h1 className="header--primary">
							<span className="header--primary--main">{"<Welcome />"}</span>
							<span className="header--primary--sub">created by Andy Martinez</span>
						</h1>

						<a href="#projectsList" className="btn btn--white">
							see my work
						</a>
					</div>
				</header>
			</div>
		</React.Fragment>
	);
};

export default Header;
