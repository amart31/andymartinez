import React from "react";

import avatar from "../../img/avatar.jpeg";

import { Title } from "./title";

export const About = () => {
	return (
		<div className="section-about">
			<Title title="About Me" />
			<div
				className="row d-flex justify-content-center
			">
				<div className="col-12 col-md-6">
					<img className="img-fluid avatar--about" src={avatar} />
					<p className="about pt-3">
						I am a Pega Certified Senior System Architect fluent in Java with experience as a front end
						developer as well. Leveraged Pega resources in order to design, develop, and test applications
						that account for client-customer interactions, organization-employee interactions, and reports
						useful for analyzing organizational goals and objectives. Utilized Java, JavaScript, HTML, CSS,
						Bootstrap, ReactJs and PostgreSQL to develop full-stack responsive, dynamic, and user-friendly
						web applications while collaborating with peers as part of an Agile Scrum environment. Take a
						look at my work and get in touch!
					</p>
				</div>
			</div>
		</div>
	);
};
