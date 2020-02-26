import React, { Component } from "react";

import reactCloset from "../../img/react-closet.jpg";
import excuseGenerator from "../../img/excuse-generator.png";
import igClone from "../../img/instagram-bstrap.jpg";
import TodoApp from "../../img/todo-app.png";

import { Title } from "./title";

import { DiHtml5, DiReact, DiJsBadge, DiWordpress, DiSass, DiBootstrap, DiCss3, DiNodejsSmall } from "react-icons/di";

export default class ImgCollage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false,
			isDesktop: false
		};
		this.handleMouseHover = this.handleMouseHover.bind(this);
		this.updatePredicate = this.updatePredicate.bind(this);
	}
	handleMouseHover() {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState(state) {
		return {
			isHovering: !state.isHovering
		};
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
		return (
			<section className="section-split">
				{isDesktop ? (
					<div className="split">
						<div className="col-6">
							<div className="composition">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://amart31.github.io/Instagram-photo-grid-clone/">
									<img
										src={igClone}
										onMouseEnter={this.handleMouseHover}
										onMouseLeave={this.handleMouseHover}
										alt="instagram-clone"
										className="composition__photo composition__photo--p1"
									/>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/amart31/final-project-frontend">
									<img
										src={reactCloset}
										onMouseEnter={this.handleMouseHover}
										onMouseLeave={this.handleMouseHover}
										alt="react-closet"
										className="composition__photo composition__photo--p2"
									/>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://amart31.github.io/excuse-generator/">
									<img
										src={excuseGenerator}
										onMouseEnter={this.handleMouseHover}
										onMouseLeave={this.handleMouseHover}
										alt="react-resort"
										className="composition__photo composition__photo--p3"
									/>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://amart31.github.io/todo-app-react-hooks/">
									<img
										src={TodoApp}
										onMouseEnter={this.handleMouseHover}
										onMouseLeave={this.handleMouseHover}
										alt="react-resort"
										className="composition__photo composition__photo--p4"
									/>
								</a>
							</div>
						</div>
						<div className="col-6 m-auto">
							{this.state.isHovering && (
								<div className="info-card">
									<h5>Interactive and Scalable Solutions</h5>
									<p>
										<DiHtml5 /> <DiReact />
										<DiJsBadge /> <DiWordpress /> <DiSass /> <DiBootstrap /> <DiCss3 />{" "}
										<DiNodejsSmall />
									</p>
								</div>
							)}
						</div>
					</div>
				) : (
					<div className="container">
						<Title title="See More" />
						<div className="row img-row">
							<div className="col-12">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://amart31.github.io/todo-app-react-hooks/">
									<img src={TodoApp} alt="todo-app" className="mobil-img mobil-img--1" />
								</a>
							</div>
							<div className="col-12">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://amart31.github.io/Instagram-photo-grid-clone/">
									<img src={igClone} alt="instagram-clone" className="mobil-img mobil-img--1" />
								</a>
							</div>
							<div className="col-12">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://amart31.github.io/excuse-generator/">
									<img src={excuseGenerator} alt="excuse-generator" className="mobil-img" />
								</a>
							</div>
							<br />
							<span className="hidden" style={{ margin: "0 auto" }}>
								<DiHtml5 />
								<DiReact />
								<DiJsBadge />
								<DiWordpress />
								<DiSass />
								<DiBootstrap />
								<DiCss3 />
								<DiNodejsSmall />
							</span>
						</div>
					</div>
				)}
			</section>
		);
	}
}
