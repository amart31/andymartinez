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

export class ProjectsList extends React.Component {
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
			<React.Fragment>
				<h2 className="text-center my-3 p-2">All of my Latest Projects</h2>
				<div className="row m-2">
					<div className="col">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="200"
									height="150"
									className="card-img"
									src={reactCloset}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>React Closet app</CardTitle>
									<CardSubtitle>React, WP, Vanilla Js, PHP</CardSubtitle>

									<Button color="info" onClick={this.toggleModalReactCloset}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalReactCloset}
									toggle={this.toggleModalReactCloset}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalReactCloset}>React Closet App</ModalHeader>
									<ModalBody>
										<p> React Closet App </p>
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
									width="200"
									height="150"
									className="card-img"
									src={instagramBstrap}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Instagram Photofeed</CardTitle>
									<CardSubtitle>HTML, CSS, & Bootstrap</CardSubtitle>

									<Button color="info" onClick={this.toggleModalToDoApp}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalToDoApp}
									toggle={this.toggleModalToDoApp}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalToDoApp}>React Closet App</ModalHeader>
									<ModalBody>
										<p> React Modal </p>
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
									width="200"
									height="150"
									className="card-img"
									src={meetupClone}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>meetup.com Clone</CardTitle>
									<CardSubtitle>React, Vanilla Js, WP, PHP</CardSubtitle>

									<Button color="info" onClick={this.toggleModalMeetupClone}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalMeetupClone}
									toggle={this.toggleModalMeetupClone}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalMeetupClone}>meetup.com Clone</ModalHeader>
									<ModalBody>
										<p> meetup.com Clone </p>
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
				<div className="row m-2">
					<div className="col">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="200"
									height="150"
									className="card-img"
									src={reactCloset}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>React Closet app</CardTitle>
									<CardSubtitle>React, WP, Vanilla Js, PHP</CardSubtitle>

									<Button color="info" onClick={this.toggleModalReactCloset}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalReactCloset}
									toggle={this.toggleModalReactCloset}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalReactCloset}>React Closet App</ModalHeader>
									<ModalBody>
										<p> React Closet App </p>
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
									width="200"
									height="150"
									className="card-img"
									src={instagramBstrap}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Instagram Photofeed</CardTitle>
									<CardSubtitle>HTML, CSS, & Bootstrap</CardSubtitle>

									<Button color="info" onClick={this.toggleModalToDoApp}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalToDoApp}
									toggle={this.toggleModalToDoApp}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalToDoApp}>React Closet App</ModalHeader>
									<ModalBody>
										<p> React Modal </p>
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
									width="200"
									height="150"
									className="card-img"
									src={meetupClone}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>meetup.com Clone</CardTitle>
									<CardSubtitle>React, Vanilla Js, WP, PHP</CardSubtitle>

									<Button color="info" onClick={this.toggleModalMeetupClone}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalMeetupClone}
									toggle={this.toggleModalMeetupClone}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalMeetupClone}>meetup.com Clone</ModalHeader>
									<ModalBody>
										<p> meetup.com Clone </p>
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
				<div className="row m-2">
					<div className="col">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="200"
									height="150"
									className="card-img"
									src={reactCloset}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>React Closet app</CardTitle>
									<CardSubtitle>React, WP, Vanilla Js, PHP</CardSubtitle>

									<Button color="info" onClick={this.toggleModalReactCloset}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalReactCloset}
									toggle={this.toggleModalReactCloset}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalReactCloset}>React Closet App</ModalHeader>
									<ModalBody>
										<p> React Closet App </p>
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
									width="200"
									height="150"
									className="card-img"
									src={instagramBstrap}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Instagram Photofeed</CardTitle>
									<CardSubtitle>HTML, CSS, & Bootstrap</CardSubtitle>

									<Button color="info" onClick={this.toggleModalToDoApp}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalToDoApp}
									toggle={this.toggleModalToDoApp}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalToDoApp}>React Closet App</ModalHeader>
									<ModalBody>
										<p> React Modal </p>
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
									width="200"
									height="150"
									className="card-img"
									src={meetupClone}
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>meetup.com Clone</CardTitle>
									<CardSubtitle>React, Vanilla Js, WP, PHP</CardSubtitle>

									<Button color="info" onClick={this.toggleModalMeetupClone}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalMeetupClone}
									toggle={this.toggleModalMeetupClone}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalMeetupClone}>meetup.com Clone</ModalHeader>
									<ModalBody>
										<p> meetup.com Clone </p>
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

				<div className="jumbotron text-center" style={{ marginBottom: "0" }}>
					<p>Footer</p>
				</div>
			</React.Fragment>
		);
	}
}
