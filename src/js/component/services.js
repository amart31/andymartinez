import React, { Component } from "react";

import { DiHtml5, DiReact, DiJsBadge, DiWordpress } from "react-icons/di";

import Title from "./title";

export default class Services extends Component {
	render() {
		const services = [
			{
				icon: <DiReact />,
				title: "ReactJs",
				info: "Responsive and Dynamic"
			},
			{
				icon: <DiJsBadge />,
				title: "VanillaJs",
				info: "Interactive Web Apps"
			},
			{
				icon: <DiHtml5 />,
				title: "HTML",
				info: "Static and Dynamic Applications"
			},
			{
				icon: <DiWordpress />,
				title: "WordPress",
				info: "Themes and Plugins Development"
			}
		];
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services--center">
					{services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
