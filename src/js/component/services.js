import React, { Component } from "react";

import { DiHtml5, DiReact, DiJsBadge, DiCss3, DiJava } from "react-icons/di";

import { GiPegasus } from "react-icons/gi";

import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Title } from "./title";

export default class Services extends Component {
	render() {
		const services = [
			{
				icon: <GiPegasus />,
				title: "Pega",
				value: 87,
				info: "Pega Enterprise Applications"
			},
			{
				icon: <DiJava />,
				title: "Java",
				value: 80,
				info: "Java Backend Solutions"
			},
			{
				icon: <DiReact />,
				title: "ReactJs",
				value: 78,
				info: "Frontend Scalability"
			},
			{
				icon: <DiJsBadge />,
				title: "Javascript",
				value: 82,
				info: "Animations and Interactions"
			},
			{
				icon: <DiHtml5 />,
				title: "HTML",
				value: 80,
				info: "HTML5"
			},
			{
				icon: <DiCss3 />,
				title: "CSS",
				value: 80,
				info: "Powerful Styles"
			}
		];
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services--center">
					{services.map((item, index) => {
						return (
							<article className="service" key={index}>
								<CircularProgressbarWithChildren
									value={item.value}
									styles={buildStyles({
										pathColor: "#179595",
										textColor: "#179595",
										trailColor: "#1F2555"
									})}>
									{/* JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

									<span style={{ width: 40, marginTop: -5 }}>{item.icon}</span>
									<div style={{ fontSize: 12, marginTop: -5 }}>
										<strong>
											<h6>{item.title}</h6>
										</strong>
									</div>
								</CircularProgressbarWithChildren>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
