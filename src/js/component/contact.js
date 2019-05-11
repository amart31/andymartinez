import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { Context } from "../store/appContext.js";

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
		infoWindow.addListener("domready", e => {
			e.render(<InfoWindow />, document.getElementById("infoWindow"));
		});
		infoWindow.open(map);
	}

	validateForm() {
		return this.state.name.length > 2 && this.state.message.length > 5;
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div id="contact-container" className="content-containers container text-center">
							<div className="row" style={{ marginTop: 3 + "rem" }}>
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden">
									<Form onSubmit={actions.handleFormSubmit}>
										<FormGroup>
											<Input
												// style={{
												// 	width: "400px",
												// 	margin: "0 auto"
												// }}
												type="text"
												name="name"
												ref={this.name}
												placeholder="Name"
												onChange={e =>
													this.setState({
														name: e.target.value
													})
												}
											/>
										</FormGroup>
										<FormGroup>
											<Input
												// style={{
												// 	width: "400px",
												// 	margin: "0 auto"
												// }}
												type="email"
												name="email"
												ref={this.email}
												placeholder="Email"
												onChange={e =>
													this.setState({
														email: e.target.value
													})
												}
											/>
										</FormGroup>
										<FormGroup>
											<Input
												// style={{
												// 	width: "400px",
												// 	height: "140px",
												// 	margin: "0 auto"
												// }}
												type="textarea"
												name="message"
												ref={this.message}
												placeholder="Tell me something"
												onChange={e =>
													this.setState({
														message: e.target.value
													})
												}
											/>
										</FormGroup>
										<div className="text-center pb-2">
											<Button
												color="primary"
												disabled={!this.validateForm()}
												// 	onClick={() => {
												// 		this.setState({
												// 			session: actions.login(
												// 				this.state.user,
												// 				this.state.pass
												// 			)
												// 		});
												// 	}}
											>
												Submit
											</Button>
										</div>
									</Form>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-none d-sm-block">
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
		);
	}
}
