//create your first component
import React from "react";

//include images into your bundle
import miamiSkyline from "../../img/b-w-bridge.jpg";

const HeroView = () => {
	return (
		<React.Fragment>
			<a name="home" />
			<div className="intro-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="intro-message">
								<h1>{"<Welcome />"}</h1>
								<h3>created by Andy Martinez</h3>
								<hr className="intro-divider" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HeroView;
