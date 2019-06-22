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
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container-fluid text-center">
							<div className="row" style={{ marginTop: 3 + "rem" }}>
								<div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6">
									<Form
										action="https://formspree.io/martinez1751@gmail.com"
										method="POST"
										className="form"
										style={{
											width: "80%",
											margin: "auto auto"
										}}>
										<FormGroup>
											<Input
												style={{
													height: "3rem",
													margin: ".5rem"
												}}
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
												style={{
													height: "3rem",
													margin: ".5rem"
												}}
												type="text"
												name="name"
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
												style={{
													height: "10rem",
													margin: ".5rem"
												}}
												type="textarea"
												name="name"
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
												style={{
													fontSize: "1.6rem",
													marginBottom: "2rem"
												}}>
												Submit
											</Button>
										</div>
									</Form>
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
		);
	}
}
