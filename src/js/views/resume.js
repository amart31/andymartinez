import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const Resume = () => {
	return (
		<React.Fragment>
			<div className="resume-header text-center">
				<img
					className="avatar"
					src="https://github.com/amart31/andymartinez/blob/master/src/img/avatar.jpeg?raw=true"
					style={{
						borderRadius: 50 + "%",
						height: 135 + "px",
						width: 135 + "px"
					}}
				/>
				<h1 className="heading-primary">
					<span className="heading-resume-main">{"<Resume />"}</span>
					<span className="heading-resume-sub">Andy Martinez</span>
				</h1>
				<Button className="btn-social mr-2" outline href="https://twitter.com/amart1751" color="info">
					Twitter
				</Button>{" "}
				<Button className="btn-git mr-2" outline href="https://github.com/amart31" color="info">
					Github
				</Button>
			</div>

			<div className="container-fluid">
				<div className="row mt-1">
					<div className="col">
						<h4 id="resume" className="text-center text-secondary mt-1">
							Technologies Used
						</h4>
						<p className="text-center">
							{
								"React | Vanilla Js | Webpack | BabelJs | JWT | Bootstrap | HTML | Wordpress | AWS | CSS | Git | Restful APi's | PHP | NPM | Github | NodeJs"
							}
						</p>
					</div>
				</div>

				<div className="row mt-1">
					<div className="col col-xs-10 col-sm-8 col-md-4 col-lg-4 mx-auto">
						<div className="container-fluid">
							<h4 className="text-center text-secondary">Work History</h4>

							<Card className="projectCard">
								<CardImg
									top
									className="card-img"
									src="https://github.com/amart31/andymartinez/blob/master/src/img/logo4geeks.png?raw=true"
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
					<div className="col mx-auto pt-2">
						<h4 className="text-center text-secondary">Education</h4>
						<div className="container text-justify">
							<div className="row mt-1">
								<div className="col col-xs-10 col-sm-8 col-md-4 col-lg-4 mx-auto">
									<Card className="projectCard m-2">
										<CardImg
											top
											className="card-img"
											src="https://github.com/amart31/andymartinez/blob/master/src/img/logo4geeks.png?raw=true"
											alt="Card image cap"
										/>
										<CardBody>
											<CardTitle>Full Stack Web Developer</CardTitle>
											<CardSubtitle>4Geeks Academy</CardSubtitle>
											<CardText>
												Project-based Full-Stack Software Development program teaching HTML5,
												CSS3, SASS, React.js, Webpack, PHP, WordPress, RESTful API, MySQL, HTTP
												Architecture, AJAX, MVC, ORM, Git, and much more.
											</CardText>
										</CardBody>
									</Card>
								</div>

								<div className="col col-xs-10 col-sm-8 col-md-4 col-lg-4 mx-auto">
									<Card className="projectCard">
										<CardImg
											top
											className="card-img"
											src="https://github.com/amart31/andymartinez/blob/master/src/img/fiuLogo.png?raw=true"
											alt="Card image cap"
										/>
										<CardBody>
											<CardTitle>Bs Criminal Justice</CardTitle>
											<CardTitle className="text-secondary">2012-2016</CardTitle>
											<CardSubtitle>Florida International University</CardSubtitle>
											<CardText>3.2 GPA. Deans List 2015, 2016. </CardText>
										</CardBody>
									</Card>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
