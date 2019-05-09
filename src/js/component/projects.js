import React from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";

import instagramBstrap from "../../img/instagram-bstrap.png";
import reactCloset from "../../img/react-closet.png";
import meetupClone from "../../img/meetup-clone.png";

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalToDoApp: false,
			modalReactCloset: false,
			modalMeetupClone: false
		};

		this.toggleModalToDoApp = this.toggleModalToDoApp.bind(this);
		this.toggleModalReactCloset = this.toggleModalReactCloset.bind(this);
		this.toggleModalMeetupClone = this.toggleModalMeetupClone.bind(this);
	}

	toggleModalToDoApp() {
		this.setState(prevState => ({
			modalToDoApp: !prevState.modalToDoApp
		}));
	}
	toggleModalReactCloset() {
		this.setState(prevState => ({
			modalReactCloset: !prevState.modalReactCloset
		}));
	}
	toggleModalMeetupClone() {
		this.setState(prevState => ({
			modalMeetupClone: !prevState.modalMeetupClone
		}));
	}

	render() {
		return (
			<div>
				<div className="row m-3">
					<div className="col">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="300"
									height="218"
									className="card-img"
									src={instagramBstrap}
									alt="Card image cap"
								/>
								<CardBody className="project-body">
									<CardTitle>Instagram Photofeed</CardTitle>
									<CardSubtitle>HTML, CSS, & Bootstrap</CardSubtitle>

									<Button className="project-buton" onClick={this.toggleModalToDoApp}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalToDoApp}
									toggle={this.toggleModalToDoApp}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalToDoApp}>Instagram Feed Clone</ModalHeader>
									<ModalBody>
										<p>Created with:</p>
										<ul>
											<li>HTML</li>
											<li>CSS</li>
											<li>Bootstrap</li>
										</ul>
									</ModalBody>
									<ModalFooter>
										<a href="https://amart31.github.io/Instagram-photo-grid-clone/">
											<Button color="info">Live Demo</Button>
										</a>
									</ModalFooter>
								</Modal>
							</Card>
						</div>
					</div>

					<div className="col">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="300"
									height="218"
									className="card-img"
									src={reactCloset}
									alt="Card image cap"
								/>
								<CardBody className="project-body">
									<CardTitle>React Closet app</CardTitle>
									<CardSubtitle>React, WP, Vanilla Js, PHP</CardSubtitle>

									<Button className="project-buton" onClick={this.toggleModalReactCloset}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalReactCloset}
									toggle={this.toggleModalReactCloset}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalReactCloset}>React Closet App</ModalHeader>
									<ModalBody>
										<p>Created with:</p>
										<ul>
											<li>ReactJs</li>
											<li>Vanilla Js</li>
											<li>WordPress Rest Api</li>
											<li>WordPress ACF Plugin</li>
											<li>WordPress Users Plugin</li>
											<li>Webpack</li>
											<li>Bootstrap</li>
											<li>CSS</li>
											<li>Reactstrap</li>
											<li>PHP</li>
										</ul>
									</ModalBody>
									<ModalFooter>
										<Link to="#">
											<Button color="info">Live Demo</Button>
										</Link>
									</ModalFooter>
								</Modal>
							</Card>
						</div>
					</div>

					<div className="col">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="300"
									height="218"
									className="card-img"
									src={meetupClone}
									alt="Card image cap"
								/>
								<CardBody className="project-body">
									<CardTitle>meetup.com Clone</CardTitle>
									<CardSubtitle>React, Vanilla Js, WP, PHP</CardSubtitle>

									<Button className="project-buton" onClick={this.toggleModalMeetupClone}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalMeetupClone}
									toggle={this.toggleModalMeetupClone}
									style={{
										color: "#4a82db"
									}}>
									<ModalHeader toggle={this.toggleModalMeetupClone}>meetup.com Clone</ModalHeader>
									<ModalBody>
										<p>Created with:</p>
										<ul>
											<li>ReactJs</li>
											<li>Vanilla Js</li>
											<li>WordPress Rest Api</li>
											<li>Webpack</li>
											<li>Bootstrap</li>
											<li>Reactstrap</li>
											<li>PHP</li>
										</ul>
									</ModalBody>
									<ModalFooter>
										<Link to="#">
											<Button color="info">Live Demo</Button>
										</Link>
									</ModalFooter>
								</Modal>
							</Card>
						</div>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col d-inline-flex text-secondary px-5 pt-2">
						<Link to="/all/" className="text-dark">
							<span>
								<i className="fas fa-code" />
								&nbsp;
							</span>
							<span>
								<p>See More</p>
							</span>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
