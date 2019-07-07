import React from "react";
import { Button } from "reactstrap";
import { Context } from "../store/appContext.js";

import Title from "./title";

import Map from "./googleMap";
import InfoWindow from "./infoWindow";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			message: ""
		};
		this.createInfoWindow = this.createInfoWindow.bind(this);

		this.name = React.createRef();
		this.email = React.createRef();
		this.message = React.createRef();
	}

	createInfoWindow(e, map) {
		const infoWindow = new window.google.maps.InfoWindow({
			content: '<div id="infoWindow" />',
			position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
		});
		infoWindow.addListener("DOMContentLoaded", e => {
			e.render(<InfoWindow />, document.querySelector("#infoWindow"));
		});
		infoWindow.open(map);
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<>
				<Title title="Contact Me" />
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container-fluid text-center">
								<div className="row" style={{ marginTop: 3 + "rem" }}>
									<div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6">
										<form
											action="https://formspree.io/martinez1751@gmail.com"
											className="form"
											method="POST">
											<div className="form-title">
												<h4 className="pb-1">Get in Touch</h4>
											</div>

											<div className="form__group">
												<input
													type="text"
													className="form__input"
													placeholder="Your Name"
													id="name"
													requiered
												/>
												<label htmlFor="name" className="form_label">
													Your Name
												</label>
											</div>
											<div className="form__group">
												<input
													type="email"
													className="form__input"
													placeholder="Your Email"
													id="email"
													requiered
												/>
												<label htmlFor="email" className="form_label">
													Your Email
												</label>
											</div>
											<div className="form__group">
												<label htmlFor="message" className="form_label">
													Message
												</label>
												<textarea
													type="text"
													className="form__input"
													placeholder="Your Message"
													id="message"
													requiered
												/>
											</div>
											<Button
												color="primary"
												style={{
													fontSize: "1.6rem",
													marginBottom: "2rem"
												}}>
												Submit
											</Button>
										</form>
									</div>
									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
										<Map
											id="myMap"
											options={{
												center: { lat: 25.77386, lng: -80.19498 },
												zoom: 13
											}}
											onMapLoad={map => {
												const marker = new window.google.maps.Marker({
													position: { lat: 25.77386, lng: -80.19498 },
													map: map,
													title: "Hello Miami!"
												});
												marker.addListener("click", e => {
													this.createInfoWindow(e, map);
												});
											}}
										/>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</>
		);
	}
}
