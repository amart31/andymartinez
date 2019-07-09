import React from "react";

import Header from "../component/header";
import About from "../component/about";
import Contact from "../component/contact";
import Projects from "../component/projects";
import Services from "../component/services";
import ImgCollage from "../component/imgCollage";

import { FaFacebook, FaGithubSquare, FaInstagram } from "react-icons/fa";

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
			</div>
		);
	}
}
