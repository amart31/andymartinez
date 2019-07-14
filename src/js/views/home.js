import React from "react";

import Header from "../component/header";
import About from "../component/about";
import Contact from "../component/contact";
import Projects from "../component/projects";
import Services from "../component/services";
import ImgCollage from "../component/imgCollage";

import { FaTwitter, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Services />
				<About />
				<ImgCollage />
				<Projects />
				<Contact />
				<div className="container-fluid">
					<div className="row p-3 footer-sec">
						<div className="col text-center">
							<div className="d-inline-flex social-icon social-icon--twitter">
								<span>
									<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/amart1751">
										<FaTwitter />
									</a>
								</span>
							</div>
							{"  "}
							<div className="d-inline-flex social-icon social-icon--github">
								<span>
									<a target="_blank" rel="noopener noreferrer" href="https://github.com/amart31">
										<FaGithubSquare />
									</a>
								</span>
							</div>
							{"  "}
							<div className="d-inline-flex social-icon social-icon--linkedin">
								<span>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/in/amart1751/">
										<FaLinkedin />
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
