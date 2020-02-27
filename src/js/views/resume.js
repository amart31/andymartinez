import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

export const Resume = () => {
	return (
		<>
			<div className="text-center">
				<header className="resume-header">
					<div className="resume-header--imgbox">
						<img
							className="avatar--about"
							src="https://github.com/amart31/andymartinez/blob/master/src/img/avatar.jpeg?raw=true"
						/>
					</div>
					<div className="resume-header--textbox">
						<h1 className="header-primary">
							<span className="resume-header--main">{"<Resume />"}</span>
							<span className="resume-header--sub">Andy Martinez</span>
						</h1>{" "}
						<Button className="btn-git mr-2" outline href="https://github.com/amart31" color="info">
							Github
						</Button>
					</div>
				</header>
			</div>

			<div className="container-fluid resume">
				<div className="row mt-1">
					<div className="col text-center">
						<h4 id="resume" className="text-center text-secondary mt-1 mb-2">
							Certifications
						</h4>

						<img
							src="https://github.com/amart31/andymartinez/blob/master/src/img/SSAlogo.png?raw=true"
							alt="PCSSA"
							className="pega-img mb-1"
						/>
						<img
							src="https://github.com/amart31/andymartinez/blob/master/src/img/PegaCertPro.png?raw=true"
							alt="Certified professional Pega"
							className="pega-img m-2"
						/>
						<img
							src="https://github.com/amart31/andymartinez/blob/master/src/img/PegaBAlogo.png?raw=true"
							alt="CBA logo"
							className="pega-img mt-1"
						/>
					</div>
				</div>

				<div className="row mt-1">
					<div className="col">
						<h4 id="resume" className="text-center text-secondary mt-1 mb-2">
							Technologies Used
						</h4>
						<p className="text-center">
							{
								"Pega | React | Javascript | Webpack | BabelJs | JWT | Bootstrap | HTML | Wordpress | AWS | REST | SOAP | CSS | Git | Restful APi's | PHP | NPM | Github | NodeJs"
							}
						</p>
					</div>
				</div>
				<h4 id="resume" className="text-center text-secondary mt-1">
					My Experience and Education
				</h4>
				<div className="row d-flex justify-content-center mt-1">
					<div className="col-xs-10 col-sm-10 col-md-6 col-lg-6 col-xl-4">
						<div className="timeline">
							<p className="timeline-p">
								<Card className="card--resume">
									<CardImg
										top
										className="card--resume--img"
										src="https://github.com/amart31/andymartinez/blob/master/src/img/pegaBG.png?raw=true"
										alt="Card image cap"
									/>
									<CardBody>
										<CardTitle>Pega System Architect/Java Developer </CardTitle>
										<CardTitle className="text-secondary">2019</CardTitle>
										<CardSubtitle>Tampa, Fl</CardSubtitle>
										<CardText>
											Leveraged Pega resources in order to design, develop, and test applications
											that account for client-customer interactions, organization-employee
											interactions, and reports useful for analyzing organizational goals and
											objectives.{" "}
										</CardText>
									</CardBody>
								</Card>
							</p>
							<p className="timeline-p">
								<Card className="card--resume">
									<CardImg
										top
										className="card--resume--img"
										src="https://github.com/amart31/andymartinez/blob/master/src/img/code.jpg?raw=true"
										alt="Card image cap"
									/>
									<CardBody>
										<CardTitle>Coding Instructor</CardTitle>
										<CardTitle className="text-secondary">2019</CardTitle>
										<CardSubtitle>Miami, Fl</CardSubtitle>
										<CardText>
											Lead a summer cohort of 12 young adults learning game development with
											HTML5, CSS3, and JavaScript while working towards a Site Developer Associate
											certification. Developed a wide array of games that covered concepts such as
											collisions, location mapping, and random values while teaching students
											HTML, CSS, Javascript and how to implement all three together in order to
											create responsive and interactive web games and web pages.{" "}
										</CardText>
									</CardBody>
								</Card>
							</p>
							<p className="timeline-p">
								<Card className="card--resume">
									<CardImg
										top
										className="card--resume--img"
										src="https://github.com/amart31/andymartinez/blob/master/src/img/code.jpg?raw=true"
										alt="Card image cap"
									/>
									<CardBody>
										<CardTitle>Frelance Web Developer</CardTitle>
										<CardTitle className="text-secondary">2019</CardTitle>
										<CardSubtitle>Miami, Fl</CardSubtitle>
										<CardText>
											Developing responsive, dynamic, and interactive websites based on clients
											expectations. Worked on projects ranging from e-commerce sites to personal
											websites.{" "}
										</CardText>
									</CardBody>
								</Card>
							</p>

							<p className="timeline-p">
								<Card className="card--resume">
									<CardImg
										top
										className="card--resume--img"
										src="https://github.com/amart31/andymartinez/blob/master/src/img/code.jpg?raw=true"
										alt="Card image cap"
									/>
									<CardBody>
										<CardTitle>Coding Teaching Assistant</CardTitle>
										<CardTitle className="text-secondary">2019</CardTitle>
										<CardSubtitle>Miami, Fl</CardSubtitle>
										<CardText>
											Teaching assistant/mentor for a group of 11 students. Actively evaluate
											students coding assignments and homework in order to provide them with
											insightful feedback according to the best coding practice
											standards.Thoroughly explained complex concepts and materials in a manner
											that students could easily understand. The topics ranged from HTML, CSS,
											Javascript, and React to more advanced concepts such as Restful API design
											and enhancing security by tokenizing sessions.{" "}
										</CardText>
									</CardBody>
								</Card>
							</p>

							<p className="timeline-p">
								<Card className="card--resume">
									<CardImg
										top
										className="card--resume--img"
										src="https://github.com/amart31/andymartinez/blob/master/src/img/logo4geeks.jpg?raw=true"
										alt="Card image cap"
									/>
									<CardBody>
										<CardTitle>Full Stack Web Developer</CardTitle>
										<CardTitle className="text-secondary">2019</CardTitle>
										<CardSubtitle>4Geeks Academy</CardSubtitle>
										<CardText>
											Project-based Full-Stack Software Development program teaching HTML5, CSS3,
											SASS, React.js, Webpack, PHP, WordPress, RESTful API, MySQL, HTTP
											Architecture, AJAX, MVC, ORM, Git, and much more.
										</CardText>
									</CardBody>
								</Card>
							</p>
							<p className="timeline-p">
								<Card className="card--resume">
									<CardImg
										top
										className="card--resume--img"
										src="https://github.com/amart31/andymartinez/blob/master/src/img/fiuLogo.jpg?raw=true"
										alt="Card image cap"
									/>
									<CardBody>
										<CardTitle>Bs Criminal Justice</CardTitle>
										<CardTitle className="text-secondary">2012-2016</CardTitle>
										<CardSubtitle>Florida International University</CardSubtitle>
										<CardText>3.2 GPA. Deans List 2015, 2016. </CardText>
									</CardBody>
								</Card>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
