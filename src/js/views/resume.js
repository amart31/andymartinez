import React from "react";

import avatar from "../../img/avatar.jpeg";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

import logo from "../../img/logo4geeks.png";

const Resume = () => {
	return (
		<React.Fragment>
			<div className="resume-header">
				<div className="container">
					<div className="row">
						<div className="col">
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
								<Button outline href="https://twitter.com/amart1751" color="info" className="mr-2">
									<i className="fab fa-twitter mr-1" />
									Twitter
								</Button>{" "}
								<Button outline href="https://github.com/amart31" color="info" className="mr-2">
									<i className="fab fa-github mr-1" />
									Github
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row mt-1">
					<div className="col">
						<h4 className="text-center text-secondary">Technologies Used</h4>
						<p className="text-center">
							{
								"React | Vanilla Js | Webpack | BabelJs | JWT | Bootstrap | HTML | Wordpress | AWS | CSS | Git | Restful APi's | PHP | NPM | Github | NodeJs"
							}
						</p>
					</div>
				</div>

				<div className="row mt-1">
					<div className="col mx-auto">
						<div className="container">
							<h4 className="text-center text-secondary">Work History</h4>

							<Card className="projectCard">
								<CardImg
									top
									width="200px"
									height="200px"
									className="card-img"
									src={logo}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Teaching Assistant</CardTitle>
									<CardSubtitle>Miami, Fl</CardSubtitle>
									<CardText>
										Teaching assistant/mentor for a group of 11 students. Actively evaluate students
										coding assignments and homework in order to provide them with insightful
										feedback according to the best coding practice standards. Thoroughly explained
										complex concepts and materials in a manner that students could easily
										understand.{" "}
									</CardText>
									<Button color="info">See More</Button>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
				<div className="row mt-1">
					<div className="col">
						<h4 className="text-center text-secondary">Projects History</h4>
					</div>
				</div>

				<div className="row mt-1">
					<div className="col">
						<h4 className="text-center text-secondary">Education</h4>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
