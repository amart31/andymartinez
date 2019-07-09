import React from "react";

import reactCloset from "../../img/react-closet.jpg";
import reactReseort from "../../img/react-resort.jpg";
import igClone from "../../img/instagram-bstrap.jpg";

import { DiHtml5, DiReact, DiJsBadge, DiWordpress, DiSass, DiBootstrap, DiCss3, DiNodejsSmall } from "react-icons/di";

class ImgCollage extends React.Component {
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
								<img
									src={igClone}
									onMouseEnter={this.handleMouseHover}
									onMouseLeave={this.handleMouseHover}
									alt="instagram-clone"
									className="composition__photo composition__photo--p1"
								/>

								<img
									src={reactCloset}
									onMouseEnter={this.handleMouseHover}
									onMouseLeave={this.handleMouseHover}
									alt="react-closet"
									className="composition__photo composition__photo--p2"
								/>

								<img
									src={reactReseort}
									onMouseEnter={this.handleMouseHover}
									onMouseLeave={this.handleMouseHover}
									alt="react-resort"
									className="composition__photo composition__photo--p3"
								/>
							</div>
						</div>
						<div className="col-6">
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
					<div>
						<div className="col-12">
							<div className="composition">
								<img
									src={igClone}
									alt="instagram-clone"
									className="composition__photo composition__photo--p1"
								/>

								<img
									src={reactCloset}
									alt="react-closet"
									className="composition__photo composition__photo--p2"
								/>

								<img
									src={reactReseort}
									alt="react-resort"
									className="composition__photo composition__photo--p3"
								/>
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

export default ImgCollage;
