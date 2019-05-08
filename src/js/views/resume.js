import React from "react";

import avatar from "../../img/avatar.jpeg";
import codeBg from "../../img/code.jpg";

const Resume = () => {
	return (
		<React.Fragment>
			<div className="resume-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="intro-message">
								<img
									className="img-fluid avatar"
									src={avatar}
									style={{
										borderRadius: 50 + "%",
										height: 135 + "px",
										width: 135 + "px"
									}}
								/>
								<h1>{"<Resume />"}</h1>
								<h3>Andy Martinez</h3>
								<hr className="intro-divider" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<h4>Technologies Used</h4>
						<ul className="d-inline-block">
							<li>
								<i className="fab fa-react fa-3x text-secondary" />
							</li>
							<li>
								<i className="fab fa-js-square fa-3x text-secondary" />
							</li>
							<li>
								<i className="fab fa-html5 fa-3x text-secondary" />
							</li>
							<li>
								<i className="fab fa-wordpress-simple fa-3x text-secondary" />
							</li>
						</ul>
						<ul className="d-inline-block">
							<li>
								<i className="fab fa-css3 fa-3x text-secondary" />
							</li>
							<li>
								<i className="fab fa-adobe fa-3x text-secondary" />
							</li>
							<li>
								<i className="fab fa-html5 fa-3x text-secondary" />
							</li>
							<li>
								<i className="fab fa-wordpress-simple fa-3x text-secondary" />
							</li>
						</ul>
					</div>

					<div className="col-lg-8">
						<h4>Work History</h4>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h4 className="text-center">Education</h4>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
