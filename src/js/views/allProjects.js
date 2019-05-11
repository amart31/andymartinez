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
import excuseGenerator from "../../img/excuse-generator.png";

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
				<div className="container-fluid">
					<div className="row projects-header">
						<div className="text-white">
							<h2>Some of my Latest Projects</h2>
						</div>
					</div>
				</div>
				<div className="row m-3">
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="200"
									height="200"
									className="card-img"
									src="https://amart31.github.io/andymartinez/react-closet.png"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>React Closet app</CardTitle>
									<CardSubtitle>React | WP | Vanilla Js | PHP | Bootstrap | HTML & CSS</CardSubtitle>

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
										<p> React </p>
										<p> Vanilla Js </p>
										<p> WordPress </p>
										<p> PHP </p>
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

					<div className=" col-xs-12 col-sm-12 col-md-6 col-lg-4">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="200"
									height="200"
									className="card-img"
									src="https://amart31.github.io/andymartinez/instagram-bstrap.png"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Instagram Photofeed</CardTitle>
									<CardSubtitle>HTML | CSS | Bootstrap</CardSubtitle>

									<Button color="info" onClick={this.toggleModalToDoApp}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalToDoApp}
									toggle={this.toggleModalToDoApp}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalToDoApp}>Instagram Feed Clone</ModalHeader>
									<ModalBody>
										<p> Instagram Feed Clone </p>
										<p> React </p>
										<p> Vanilla Js </p>
										<p> Bootstrap </p>
										<p> HTML & CSS </p>
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

					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="200"
									height="200"
									className="card-img"
									src="https://amart31.github.io/andymartinez/meetup-clone.png"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>meetup.com Clone</CardTitle>
									<CardSubtitle>React | Vanilla Js | WP | PHP</CardSubtitle>

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
										<p> React </p>
										<p> Vanilla Js </p>
										<p> Bootstrap </p>
										<p> WordPress </p>
										<p> PHP </p>
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
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="200"
									height="200"
									className="card-img"
									src="https://amart31.github.io/andymartinez/excuse-generator.png"
									alt="Card image cap"
								/>
								<CardBody>
									<CardTitle>Excuse Generator site</CardTitle>
									<CardSubtitle>Vanilla Js | HTML | CSS | Bootstrap</CardSubtitle>

									<Button color="info" onClick={this.toggleModalReactCloset}>
										See More
									</Button>
								</CardBody>

								<Modal
									isOpen={this.state.modalReactCloset}
									toggle={this.toggleModalReactCloset}
									style={{ color: "#4a82db" }}>
									<ModalHeader toggle={this.toggleModalReactCloset}>
										Excuse Generator Vanilla Js
									</ModalHeader>
									<ModalBody>
										<p> Excuse Generator site </p>
										<p> React </p>
										<p> Vanilla Js </p>
										<p> Bootstrap </p>
										<p> HTML & CSS </p>
									</ModalBody>
									<ModalFooter>
										<a href="https://amart31.github.io/excuse-generator/">
											<Button color="info">Live Demo</Button>
										</a>
									</ModalFooter>
								</Modal>
							</Card>
						</div>
					</div>

					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="200"
									height="200"
									className="card-img"
									src="https://amart31.github.io/andymartinez/instagram-bstrap.png"
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
										<p> React </p>
										<p> Vanilla Js </p>
										<p> Bootstrap </p>
										<p> HTML & CSS </p>
										<p> WordPress </p>
										<p> PHP </p>
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

					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
						<div>
							<Card className="projectCard">
								<CardImg
									top
									width="200"
									height="200"
									className="card-img"
									src="https://amart31.github.io/andymartinez/meetup-clone.png"
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
										<p> React </p>
										<p> Vanilla Js </p>
										<p> Bootstrap </p>
										<p> HTML & CSS </p>
										<p> WordPress </p>
										<p> PHP </p>
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
