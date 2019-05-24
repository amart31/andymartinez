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

import Title from "./title";

import ReactCloset from "../../img/react-closet.png";
import ReactResort from "../../img/react-resort.png";
import MeetupClone from "../../img/meetup-clone.png";
import ExcuseGenerator from "../../img/excuse-generator.png";
import CodeImage from "../../img/code.jpg";
import InstagramBstrap from "../../img/instagram-bstrap.png";

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		const modalStyle = {
			border: "0",
			borderRadius: "4px",
			bottom: "auto",
			minHeight: "10rem",
			left: "50%",
			padding: ".5rem",
			position: "fixed",
			right: "auto",
			top: "50%",
			transform: "translate(-50%,-50%)",
			width: "80%"
		};
		const projects = [
			{
				title: "React Closet",
				img: ReactCloset,
				link: "https://github.com/amart31/final-project-frontend",
				info: "React | WP | Vanilla Js | PHP | Bootstrap | HTML & CSS",
				description:
					"This project leverages WordPress REST API along with ReactJs to create a full range e-commerce marketplace. Users can add products to their cart or save them under their Wishlist. The site uses JWT for authentication and allows new users to register and also login/logout. Users can also create their own products with the ACF plugin where it is added to the marketplace live, users can shop by categories or by all products."
			},
			{
				title: "React Resort App",
				img: ReactResort,
				link: "https://github.com/amart31/react-resort",
				info: "React | ContetFul | Vanilla Js | Netlify | HTML & CSS | Restful API ",
				description:
					"Web App for a resort business created with React and hosted on Netlify, project is coming live soon."
			},
			{
				title: "Meetup.com Clone",
				img: MeetupClone,
				link: "https://github.com/amart31/Meetup-Clone",
				info: "React | WP | Vanilla Js | PHP | Bootstrap | HTML & CSS",
				description:
					"This project is a clone of meetup.com, Users can login and logout through JWT and Wordpress is used to store the data consumed."
			},
			{
				title: "Excuse Generator",
				img: ExcuseGenerator,
				link: "https://amart31.github.io/excuse-generator/",
				info: "React | WP | Vanilla Js | PHP | Bootstrap | HTML & CSS",
				description:
					"Excuse generating site that randomly generates escuses by concatenating different arrays. "
			},
			{
				title: "React Todo App",
				img: CodeImage,
				link: "https://github.com/amart31?tab=repositories",
				info: "React | Vanilla Js | Bootstrap | HTML & CSS | Coming Soon",
				description:
					"React web app that lets the user create and save a list of chores or reminders. The user can save the task for a set amount of time or until checked off."
			},
			{
				title: "Instagram Clone",
				img: InstagramBstrap,
				link: "https://amart31.github.io/Instagram-photo-grid-clone/",
				info: " HTML & CSS | Bootstrap",
				description:
					"Instagram inspired site created with HTML and CSS with Boostrap components. This site exemplifies Bootstrap responsive capabilities."
			}
		];
		return (
			<section className="projects">
				<Title title="Projects" />
				<div className="projects-center">
					{projects.map((item, index) => {
						return (
							<Card key={index} className="projectCard">
								<CardImg top className="card-img" src={item.img} alt="Card image cap" />
								<CardBody>
									<CardTitle>{item.title}</CardTitle>
									<CardSubtitle>{item.info}</CardSubtitle>

									<Button className="project-buton" onClick={this.toggleModal}>
										See More
									</Button>
								</CardBody>

								<Modal isOpen={this.state.modal} toggle={this.toggleModal} style={modalStyle}>
									<ModalHeader toggle={this.toggleModal}>{item.title}</ModalHeader>
									<ModalBody>
										<p>{item.description}</p>
									</ModalBody>
									<ModalFooter>
										<a href={item.link}>
											<Button color="info">Live Demo</Button>
										</a>
									</ModalFooter>
								</Modal>
							</Card>
						);
					})}
				</div>
			</section>
		);
	}
}

export default Projects;
