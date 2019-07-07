import React from "react";

import Title from "./title";

import ReactCloset from "../../img/react-closet.jpg";
import ReactResort from "../../img/react-resort.jpg";
import MeetupClone from "../../img/meetup-clone.jpg";

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDesktop: false
		};

		this.updatePredicate = this.updatePredicate.bind(this);
	}
	componentDidMount() {
		this.updatePredicate();
		window.addEventListener("resize", this.updatePredicate);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updatePredicate);
	}

	updatePredicate() {
		this.setState({ isDesktop: window.innerWidth > 800 });
	}
	render() {
		const isDesktop = this.state.isDesktop;

		const projects = [
			{
				title: "React Closet",
				img: ReactCloset,
				link: "https://github.com/amart31/final-project-frontend",
				info: ["React", "WordPress", "Vanilla Js", "PHP", "Bootstrap", "HTML & CSS/SASS"],
				description:
					"This project leverages WordPress REST API along with ReactJs to create an e-commerce marketplace. Users can add products to their cart or save them under their Wishlist. JWT is used for authentication. Users can also create their own products and shop by categories."
			},
			{
				title: "React Resort App",
				img: ReactResort,
				link: "https://github.com/amart31/react-resort",
				info: ["React", "Netlify", "Vanilla Js", "Restful API", "Bootstrap", "HTML & CSS/SASS"],
				description:
					"Web App created for a resort business made with ReactJS and hosted on Netlify, project will be coming live soon."
			},
			{
				title: "Meetup.com Clone",
				img: MeetupClone,
				link: "https://github.com/amart31/Meetup-Clone",
				info: ["React", "Wordpress", "Vanilla Js", "PHP", "Bootstrap", "HTML & CSS"],
				description:
					"This project was inspired by meetup.com, Users can login and logout and authentication is handled by JWT, user information is stored in Wordpress and the data consumed in the React frontend."
			}
		];
		return (
			<div className="projects" id="projectsList">
				<Title title="Projects" />

				{isDesktop ? (
					<div className="container">
						<div className="row">
							{projects.map((item, index) => {
								return (
									<div
										key={index}
										id="projects"
										className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
										<div className="card my-5">
											<div className="card__side card__side--front">
												<div className="card__picture card__picture--1">
													<img
														className="card__picture card__picture--1"
														src={item.img}
														alt="image"
													/>
												</div>
												<h4 className="card__heading">
													<span className="card__heading-span--1">{item.title}</span>
												</h4>
												<div className="card__details">
													<ul>
														<li>{item.info[0]}</li>
														<li>{item.info[1]}</li>
														<li>{item.info[2]}</li>
														<li>{item.info[3]}</li>
														<li>{item.info[4]}</li>
														<li>{item.info[5]}</li>
													</ul>
												</div>
											</div>
											<div className="card__side card__side--back card__side--back-1 hidden">
												<div className="card__cta">
													<div className="card__description-box">
														<p className="card__description-only">{item.description}</p>
													</div>
													<div className="card__details card__details--back">
														<ul>
															<li>Responsive</li>
															<li>Scalable</li>
															<li>Interactive</li>
														</ul>
													</div>
													<a href={item.link} className="btn btn--white">
														See More
													</a>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				) : (
					<div className="container">
						<div className="row">
							{projects.map((item, index) => {
								return (
									<div key={index} className="col-12">
										<div className="mobil-card my-5">
											<div className="mobil-card__picture">
												<img className="mobil-card__picture" src={item.img} alt="image" />
											</div>
											<h4 className="mobil-card__heading">
												<span className="mobil-card__heading-span">{item.title}</span>
											</h4>
											<div className="mobil-card__details">
												<ul>
													<li>{item.info[0]}</li>
													<li>{item.info[1]}</li>
													<li>{item.info[2]}</li>
													<li>{item.info[3]}</li>
													<li>{item.info[4]}</li>
													<li>{item.info[5]}</li>
												</ul>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Projects;
