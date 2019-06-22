import React from "react";

import Header from "../component/header";
import About from "../component/about";
import Contact from "../component/contact";
import Projects from "../component/projects";
import Services from "../component/services";

import { FaFacebook, FaGithubSquare, FaInstagram } from "react-icons/fa";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Services />

				<About />

				<Projects />

				<Contact />

				<div className="container-fluid">
					<div className="row p-3 footer-sec">
						<div className="col text-center">
							<div className="d-inline-flex social-icon">
								<span>
									<FaFacebook />
								</span>
							</div>
							{"  "}
							<div className="d-inline-flex social-icon">
								<span>
									<FaGithubSquare />
								</span>
							</div>
							{"  "}
							<div className="d-inline-flex social-icon">
								<span>
									<FaInstagram />
								</span>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
