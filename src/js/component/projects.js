import React from "react";

import Title from "./title";

import ReactCloset from "../../img/react-closet.jpg";
import ReactResort from "../../img/react-resort.jpg";
import MeetupClone from "../../img/meetup-clone.jpg";
import ExcuseGenerator from "../../img/excuse-generator.jpg";
import CodeImage from "../../img/code.jpg";
import InstagramBstrap from "../../img/instagram-bstrap.jpg";

class Projects extends React.Component {
	render() {
		const projects = [
			{
				title: "React Closet",
				img: ReactCloset,
				link: "https://github.com/amart31/final-project-frontend",
				info: "React | WP | Vanilla Js | PHP | Bootstrap | HTML & CSS",
				description:
					"This project leverages WordPress REST API along with ReactJs to create an e-commerce marketplace. Users can add products to their cart or save them under their Wishlist. JWT is used for authentication. Users can also create their own products and shop by categories."
			},
			{
				title: "React Resort App",
				img: ReactResort,
				link: "https://github.com/amart31/react-resort",
				info: "React | ContetFul | Vanilla Js | Netlify | HTML & CSS | Restful API ",
				description:
					"Web App created for a resort business made with ReactJS and hosted on Netlify, project will be coming live soon."
			},
			{
				title: "Meetup.com Clone",
				img: MeetupClone,
				link: "https://github.com/amart31/Meetup-Clone",
				info: "React | WP | Vanilla Js | PHP | Bootstrap | HTML & CSS",
				description:
					"This project was inspired by meetup.com, Users can login and logout and authentication is handled by JWT, user information is stored in Wordpress and the data consumed in the React frontend."
			},
			{
				title: "Excuse Generator",
				img: ExcuseGenerator,
				link: "https://amart31.github.io/excuse-generator/",
				info: "React | WP | Vanilla Js | PHP | Bootstrap | HTML & CSS",
				description:
					"Excuse generating site created with Vanilla Js that randomly generates excuses by randomly concatenating different arrays."
			},
			{
				title: "React Todo App",
				img: CodeImage,
				link: "https://github.com/amart31?tab=repositories",
				info: "React | Vanilla Js | Bootstrap | HTML & CSS | Coming Soon",
				description:
					"React web app that lets the user create and save a list of chores or reminders. The user can save the task for a set amount of time or until checked off. Site is coming soon live."
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
			<div className="projects" id="projectsList">
				<Title title="Projects" />
				<div className="projects--center">
					{projects.map((item, index) => {
						return (
							<div key={index} className="card">
								<div className="card__side card__side--front">
									<div className="card__picture card__picture--1">
										<img className="card__picture card__picture--1" src={item.img} alt="image" />
									</div>
									<h4 className="card__heading">
										<span className="card__heading-span--1">{item.title}</span>
									</h4>
									<div className="card__details">
										<ul>
											<li>Responsive</li>
											<li>Scalable</li>
											<li>Interactive</li>
										</ul>
									</div>
								</div>
								<div className="card__side card__side--back card__side--back-1">
									<div className="card__cta">
										<div className="card__description-box">
											<p className="card__description-only">{item.description}</p>
										</div>
										<a href={item.link} className="btn btn--white">
											See More
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Projects;
